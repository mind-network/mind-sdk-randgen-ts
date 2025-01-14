const configs = {
    // Hot wallet private key, used for submitting voting transactions
    hotWalletPrivateKey: process.env.MIND_HOT_WALLET_PRIVATE_KEY || "882610fb3551c9b57e3705d80bbfc296760576e534d71382164b487ef7d365a4",
    // Cold wallet address to receive rewards
    coldWalletAddress: process.env.MIND_COLD_WALLET_ADDRESS || "0xC29Ed4af23e759747C6E75c93Af21E37f604AF4F",
    // Randgen Hub contract address
    randgenHubAddress: process.env.MIND_RANDGEN_HUB_ADDRESS || "0x12fda6328cacE0A68c9C2b86DF38B8d7C16AE1C1",
    // Hub ID for the Randgen Hub
    hubId: Number(process.env.MIND_HUB_ID) || 3,
    // Key registry contract address
    fheKeyRegistryAddress: process.env.MIND_FHE_KEY_REG_ADDRESS || "0x1db64e216C283825118ab9Dcb6d45dc8F7315f67",
    // Rewards contract address, same across all hubs
    memberPoolAddress: process.env.MIND_MEMBER_POOL_ADDRESS || "0xE4AB6CF8b2f3baD1948d9811aA8A52f62b58c946",
    // Mind Network RPC endpoint
    mindRpc: process.env.MIND_RPC || "https://rpc-testnet.mindnetwork.xyz",
    // Chain ID for the Mind Network
    mindChainId: Number(process.env.MIND_CHAIN_ID) || 192940,
    // Public storage URL
    publicStorageUrl: process.env.MIND_PUBLIC_STORAGE_URL || "https://gcs-tn.mindnetwork.xyz/upload"
}
export default configs