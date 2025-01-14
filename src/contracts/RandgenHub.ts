import { Contract, JsonRpcProvider, Network, toUtf8Bytes } from 'ethers'
import configs from '../config'
import abi from '../abi/RandgenHub.json'
import { RandgenHub } from '../typechain/RandgenHub'
import hotWallet from '../hotWallet'

const provider = new JsonRpcProvider(configs.mindRpc, configs.mindChainId, {
    staticNetwork: Network.from(configs.mindChainId)
})

const contract: RandgenHub = new Contract(configs.randgenHubAddress, abi, provider) as unknown as RandgenHub

export async function getFheKeySetId() {
    return contract.fheKeySetID()
}

export async function getColdWalletAddress() {
    return contract.hotWalletToVoter(hotWallet().address)
}

export async function register() {
    return contract.connect(hotWallet()).registerVoter(configs.coldWalletAddress)
}

export async function hasVoted() {
    return contract.hasVoted(hotWallet().address)
}

export async function isVoterReady() {
    const errorCode = await contract.isVoterReady(hotWallet().address)
    return errorCode == 0n
}

export async function vote(ctUrl: string) {
    const contractPayload = toUtf8Bytes(ctUrl)
    return contract.connect(hotWallet()).submitRandomCt(contractPayload)
}