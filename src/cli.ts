import { Command } from 'commander';
import * as lib from './lib';
import configs from './config';

const program = new Command();

program
    .name('mind-network-randgen-hub-cli')
    .description('A CLI tool to interact with the Randgen Hub on the Mind Network')
    .version('1.0.0');

/**
 * Command: register-voter
 * Description: Registers the hot wallet as a voter in the Randgen Hub.
 */
program
    .command('register-voter')
    .description('Register a voter in the Randgen Hub')
    .argument('[hotWalletPrivateKey]', 'Private key of the hot wallet used for voting')
    .argument('[coldWalletAddress]', 'Cold wallet address to receive voting rewards')
    .action(async (hotWalletPrivateKey, coldWalletAddress) => {
        try {
            if (hotWalletPrivateKey) configs.hotWalletPrivateKey = hotWalletPrivateKey;
            if (coldWalletAddress) configs.coldWalletAddress = coldWalletAddress;

            await lib.registerVoter();
            console.log('Voter registration successful.');
        } catch (error) {
            console.error('Error registering voter:', error);
            process.exit(1);
        }
    });

/**
 * Command: check-voting-reward
 * Description: Checks the voting rewards for the hot and cold wallets.
 */
program
    .command('check-voting-reward')
    .description('Check voting rewards for hot and cold wallets in the Randgen Hub')
    .option('--hot-wallet-private-key <key>', 'Private key of the hot wallet')
    .option('--cold-wallet-address <address>', 'Address of the cold wallet')
    .action(async (options) => {
        try {
            const { hotWalletPrivateKey, coldWalletAddress } = options;
            if (hotWalletPrivateKey) configs.hotWalletPrivateKey = hotWalletPrivateKey;

            await lib.checkHotWalletReward();
            if (coldWalletAddress) configs.coldWalletAddress = coldWalletAddress;

            await lib.checkColdWalletReward();
        } catch (error) {
            console.error('Error checking voting rewards:', error);
            process.exit(1);
        }
    });

/**
 * Command: print-fhe-keyset
 * Description: Fetches and displays the Fully Homomorphic Encryption (FHE) key set.
 */
program
    .command('print-fhe-keyset')
    .description('Display the current FHE key set for encryption operations')
    .action(async () => {
        try {
            await lib.fetchFheKeySet();
            console.log('FHE key set retrieved successfully.');
        } catch (error) {
            console.error('Error retrieving FHE key set:', error);
            process.exit(1);
        }
    });

/**
 * Command: encrypt
 * Description: Encrypts a given number using FHE.
 */
program
    .command('encrypt')
    .description('Encrypt a number using the FHE key set')
    .argument('<number>', 'The number to encrypt')
    .action(async (number) => {
        try {
            const encryptedData = await lib.encrypt(Number(number));
            console.log(`Encrypted Data: ${encryptedData}`);
        } catch (error) {
            console.error('Error encrypting the number:', error);
            process.exit(1);
        }
    });

/**
 * Command: submit-vote
 * Description: Submits a vote using an encrypted ciphertext URL.
 */
program
    .command('submit-vote')
    .description('Submit a vote using an encrypted ciphertext URL')
    .argument('<ciphertextUrl>', 'The URL of the encrypted vote')
    .argument('[hotWalletPrivateKey]', 'Private key of the hot wallet used for voting')
    .action(async (ciphertextUrl, hotWalletPrivateKey) => {
        if (hotWalletPrivateKey) configs.hotWalletPrivateKey = hotWalletPrivateKey;

        try {
            await lib.submitVote(ciphertextUrl);
            console.log('Vote submitted successfully.');
        } catch (error) {
            console.error('Error submitting vote:', error);
            process.exit(1);
        }
    });

/**
 * Command: vote-once
 * Description: Performs a single voting action in the Randgen Hub.
 */
program
    .command('vote-once')
    .description('Perform a single voting action in the Randgen Hub')
    .argument('[hotWalletPrivateKey]', 'Private key of the hot wallet used for voting')
    .action(async (hotWalletPrivateKey) => {
        try {
            if (hotWalletPrivateKey) configs.hotWalletPrivateKey = hotWalletPrivateKey;

            await lib.voteOnce();
            console.log('Vote completed successfully.');
        } catch (error) {
            console.error('Error performing single vote:', error);
            process.exit(1);
        }
    });

/**
 * Command: vote-nonstop
 * Description: Continuously votes in every eligible round in the Randgen Hub.
 */
program
    .command('vote-nonstop')
    .description('Continuously vote in all eligible rounds in the Randgen Hub')
    .argument('[hotWalletPrivateKey]', 'Private key of the hot wallet used for voting')
    .action(async (hotWalletPrivateKey) => {
        try {
            if (hotWalletPrivateKey) configs.hotWalletPrivateKey = hotWalletPrivateKey;

            await lib.voteContinuously();
        } catch (error) {
            console.error('Error performing nonstop voting:', error);
            process.exit(1);
        }
    });

// Parse and execute the CLI commands
program.parse(process.argv);
