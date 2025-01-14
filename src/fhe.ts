import axios from "axios"
import logger from "./logger"
import fhe from "../fhe_wasm"
import { keccak256, toUtf8Bytes } from "ethers"
import configs from "./config"
import hotWallet from "./hotWallet"

/**
 * Represents the Fully Homomorphic Encryption (FHE) operations.
 */
export default class FHE {
    private inited: boolean;
    private publicKeyUrl: string;

    /**
     * Initializes the FHE instance with a given public key URL.
     * @param publicKeyUrl - The URL to fetch the public key for encryption.
     */
    constructor(publicKeyUrl: string) {
        this.publicKeyUrl = publicKeyUrl
        this.inited = false
    }

    /**
     * Initializes the FHE library by fetching and setting the public key.
     * Logs the initialization status.
     * @throws Will throw an error if the public key fetch fails.
     */
    async init(): Promise<void> {
        if (!this.inited) {
            try {
                const result = await axios.get(this.publicKeyUrl)
                fhe.set_public_key(result.data)
                this.inited = true
                logger.info({ msg: "FHE initialized", publicKeyUrl: this.publicKeyUrl })
            } catch (error) {
                logger.error(error)
                throw new Error("FHE initialization failed")
            }
        }
    }

    /**
     * Encrypts a given number or generates a random number for encryption, then stores the encrypted data.
     * 
     * This function takes an optional number as input. If no number is provided, it generates a random 8-bit unsigned 
     * integer (0–255) using the FHE library, encrypts it, and stores the encrypted data. If a number is provided, it 
     * checks that the number is within the valid range (0–255), encrypts it, and stores the encrypted data. The function 
     * returns the URL of the stored encrypted data upon success.
     * 
     * Logging:
     * - Logs the generation of the random number if no input is provided.
     * - Logs an error if random number generation, encryption, or storage fails.
     * - Logs the specific number being encrypted in case of an error.
     * 
     * @param {number} [num] - An optional number to encrypt. Must be between 0 and 255, inclusive. If not provided, a random number is generated.
     * @returns {Promise<string>} The URL of the stored encrypted data if the operation is successful.
     * @throws {Error} Throws an error if:
     * - `num` is provided but is not within the range [0, 255].
     * - Encryption of the random or provided number fails.
     * - Random number generation fails.
     */
    async encrypt(num?: number): Promise<string> {
        if (num === undefined) {
            const encrypted = fhe.get_random_u8()
            logger.info("Random number generated")
            if (encrypted) {
                return this.saveFcnInput(encrypted)
            } else {
                logger.error("Unable to generate random number")
                throw new Error("Random number generation failed")
            }
        } else {
            if (num < 0 || num > 255) {
                throw new Error("num must be between 0 and 255")
            }
            const encrypted = fhe.encrypt_u8(num)
            if (encrypted) {
                return this.saveFcnInput(encrypted)
            } else {
                logger.error("Unable to encrypt number " + num)
                throw new Error("Number encryption failed")
            }
        }
    }

    /**
     * Saves the encrypted data to a public storage service.
     * Signs the payload using the hot wallet and logs the storage URL.
     * @param base64Encoded - The Base64-encoded string to store.
     * @returns The URL of the saved encrypted data.
     * @throws Will throw an error if the storage request fails.
     */
    async saveFcnInput(base64Encoded: string): Promise<string> {
        const wallet = hotWallet()
        const hash = keccak256(toUtf8Bytes(base64Encoded))
        const payload = {
            subnet_id: configs.hubId,
            wallet: wallet.address,
            signature: wallet.signingKey.sign(hash).serialized,
            fhe_content: base64Encoded
        }
        const reply = await axios.post(configs.publicStorageUrl, payload)
        logger.info({ cypherTextUrl: reply.data.url })
        return reply.data.url
    }
}