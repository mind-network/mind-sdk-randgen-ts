import { Wallet, JsonRpcProvider, Network } from 'ethers'
import configs from './config'

const provider = new JsonRpcProvider(configs.mindRpc, configs.mindChainId, {
    staticNetwork: Network.from(configs.mindChainId)
})

/**
 * Creates and returns a hot wallet instance connected to a blockchain provider.
 * Assumes `configs` contains valid `rpc`, `chainID`, and `hotWalletPrivateKey`.
 */
export default function hotWallet(): Wallet {
    return new Wallet(configs.hotWalletPrivateKey, provider)
}