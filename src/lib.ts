import logger from "./logger";
import { ZeroAddress } from "ethers";
import configs from "./config";
import * as randgen from "./contracts/RandgenHub";
import * as hubsSdk from "mind-hubs-sdk";
import hotWallet from "./hotWallet";
import FHE from "./fhe";

// Initialize the Core SDK context with the provided configuration
hubsSdk.CoreContextManager.initialize({
    fheKeyRegistryAddress: configs.fheKeyRegistryAddress,
    memberPoolAddress: configs.memberPoolAddress,
    rpc: configs.mindRpc,
    chainID: configs.mindChainId
});

// Global FHE client instance
let fheClient: FHE | null = null;

/**
 * Initializes the FHE client if not already initialized.
 * Fetches the FHE key set and sets up the FHE client.
 */
async function initializeFhe(): Promise<void> {
    if (!fheClient) {
        const keySet = await fetchFheKeySet();
        fheClient = new FHE(keySet.publicKey.keyURL);
        await fheClient.init();
    }
}

/**
 * Registers the hot wallet with the Randgen Hub.
 * Logs the cold wallet address if already registered, otherwise performs registration.
 * @throws Error if the registration process fails.
 */
export async function registerVoter(): Promise<void> {
    const coldWalletAddress = await randgen.getColdWalletAddress();

    if (coldWalletAddress === ZeroAddress) {
        const tx = await randgen.register();
        await tx.wait();

        const updatedColdWalletAddress = await randgen.getColdWalletAddress();
        logger.info({
            action: "registerVoter",
            status: "success",
            hotWalletAddress: hotWallet().address,
            coldWalletAddress: updatedColdWalletAddress,
            txHash: tx.hash
        });
    } else {
        logger.info(`Hot wallet is already registered with cold wallet: ${coldWalletAddress}`);
    }
}

/**
 * Checks and logs the voting reward for the hot wallet.
 * @returns The reward amount for the hot wallet.
 * @throws Error if fetching the reward fails.
 */
export async function checkHotWalletReward(): Promise<bigint> {
    const coldWalletAddress = await randgen.getColdWalletAddress();
    const rewardAmount = await hubsSdk.getVotingReward(coldWalletAddress, configs.hubId);

    logger.info({
        hotWalletAddress: hotWallet().address,
        coldWalletAddress,
        votingRewardAmount: rewardAmount
    });

    return rewardAmount;
}

/**
 * Checks and logs the voting reward for the cold wallet.
 * @returns The reward amount for the cold wallet.
 * @throws Error if fetching the reward fails.
 */
export async function checkColdWalletReward(): Promise<bigint> {
    const rewardAmount = await hubsSdk.getVotingReward(configs.coldWalletAddress, configs.hubId);

    logger.info({
        coldWalletAddress: configs.coldWalletAddress,
        votingRewardAmount: rewardAmount
    });

    return rewardAmount;
}

/**
 * Fetches the FHE key set and logs its details.
 * @returns The FHE key set object containing the public key and other metadata.
 * @throws Error if fetching the key set fails.
 */
export async function fetchFheKeySet() {
    const keySetId = await randgen.getFheKeySetId();
    logger.info({ keySetId });

    const keySet = await hubsSdk.fetchFheKeySet(keySetId);
    logger.info({
        computeKey: keySet.computeKey,
        publicKey: keySet.publicKey,
        privateKey: keySet.privateKey
    });

    return keySet;
}

/**
 * Encrypts a number using the FHE client.
 * @param number - The number to encrypt.
 * @returns The encrypted representation of the number.
 * @throws Error if encryption fails.
 */
export async function encrypt(number: number): Promise<string> {
    await initializeFhe();
    const ciphertextUrl = fheClient!.encrypt(number);
    logger.info(ciphertextUrl);
    return ciphertextUrl;
}

/**
 * Submits a vote using the given ciphertext URL.
 * Logs the transaction details.
 * @param ciphertextUrl - The URL of the encrypted vote.
 * @throws Error if the vote submission fails.
 */
export async function submitVote(ciphertextUrl: string): Promise<void> {
    const tx = await randgen.vote(ciphertextUrl);
    logger.info({ ciphertextUrl, txHash: tx.hash });
    await tx.wait();
}

/**
 * Performs a single vote if the voter is ready and hasn't voted in the current round.
 * Logs the transaction details or relevant errors.
 * @throws Error if the voter is not ready or the submission fails.
 */
export async function voteOnce(): Promise<void> {
    const isReady = await randgen.isVoterReady();

    if (!isReady) {
        logger.error("Voter is not ready to vote.");
        return;
    }

    const [hasVoted, votingDeadline] = await randgen.hasVoted();

    if (hasVoted) {
        logger.error("Voter has already voted in this round.");
        return;
    }

    await initializeFhe();
    const ciphertextUrl = await fheClient!.encrypt();
    await submitVote(ciphertextUrl);
}

/**
 * Continuously votes in all eligible rounds. Sleeps between rounds if necessary.
 * Logs transaction details for every successful vote.
 * @throws Error if the voter is not ready or any submission fails.
 */
export async function voteContinuously(): Promise<void> {
    const isReady = await randgen.isVoterReady();

    if (!isReady) {
        logger.error("Voter is not ready to vote.");
        return;
    }

    await initializeFhe();

    while (true) {
        const [hasVoted, votingDeadline] = await randgen.hasVoted();

        if (hasVoted && votingDeadline > Date.now() / 1000) {
            const sleepDuration = Number(votingDeadline) * 1000 - Date.now();
            logger.info(`Already voted. Sleeping for ${sleepDuration / 1000} seconds.`);
            await sleep(sleepDuration);
            continue;
        }

        const ciphertextUrl = await fheClient!.encrypt();
        await submitVote(ciphertextUrl);
    }
}

/**
 * Sleeps for a specified duration.
 * @param ms - The duration in milliseconds.
 * @returns A promise that resolves after the duration.
 */
async function sleep(ms: number): Promise<void> {
    logger.info(`Sleeping for ${ms / 1000} seconds.`);
    return new Promise(resolve => setTimeout(resolve, ms));
}
