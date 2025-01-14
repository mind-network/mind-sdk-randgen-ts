# **Mind Network Randgen Hub Voter CLI & SDK**

A TypeScript-based Command Line Interface (CLI) and SDK to interact with the **Randgen Hub** on the **Mind Network**. This tool provides functionalities such as voter registration, reward checking, encryption, and anonymous voting powered by Fully Homomorphic Encryption (FHE). The hub is live and accessible at [Randgen Hub](https://dapp.mindnetwork.xyz/votetoearn/voteonhubs/3).

---

## **Features**
- **Voter Registration**: Register your hot wallet as a voter in the Randgen Hub.
- **Reward Checking**: Check voting rewards associated with your hot and cold wallets.
- **Anonymous Voting**: Perform one-time or continuous voting in eligible rounds, with anonymity guaranteed by FHE.
- **Fully Homomorphic Encryption (FHE)**: Leverage FHE for secure and privacy-preserving voting.
- **Encryption**: Encrypt data using the FHE key set.
- **Vote Submission**: Submit encrypted votes to the Randgen Hub.
- **SDK for Programmatic Usage**: Use the SDK to integrate functionalities into your own projects.

---

## **Installation**

### **Prerequisites**
- **Node.js** (version 20 or later)
- **npm** (Node Package Manager)

### **Steps**
1. Clone the repository

2. Navigate to the project directory

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build the project:
   ```bash
   npm run build
   ```

5. Run the CLI:
   ```bash
   node dist/cli.js --help
   ```

---

## **CLI Usage**

The CLI provides various commands for interacting with the Randgen Hub. Below is a list of available commands:

### **register-voter**
Registers the hot wallet as a voter in the Randgen Hub.
```bash
node dist/cli.js register-voter [hotWalletPrivateKey] [coldWalletAddress]
```
- **Arguments:**
  - `hotWalletPrivateKey` (optional): Private key of the hot wallet used for voting.
  - `coldWalletAddress` (optional): Cold wallet address to receive voting rewards.

### **check-voting-reward**
Checks the voting rewards for the hot and cold wallets.
```bash
node dist/cli.js check-voting-reward [--hot-wallet-private-key <key>] [--cold-wallet-address <address>]
```
- **Options:**
  - `--hot-wallet-private-key`: Private key of the hot wallet.
  - `--cold-wallet-address`: Address of the cold wallet.

### **print-fhe-keyset**
Fetches and displays the Fully Homomorphic Encryption (FHE) key set.
```bash
node dist/cli.js print-fhe-keyset
```

### **encrypt**
Encrypts a given number using FHE.
```bash
node dist/cli.js encrypt <number>
```
- **Arguments:**
  - `number`: The number to encrypt.

### **submit-vote**
Submits a vote using an encrypted ciphertext URL.
```bash
node dist/cli.js submit-vote <ciphertextUrl> [hotWalletPrivateKey]
```
- **Arguments:**
  - `ciphertextUrl`: The URL of the encrypted vote.
  - `hotWalletPrivateKey` (optional): Private key of the hot wallet used for voting.

### **vote-once**
Performs a single voting action in the Randgen Hub.
```bash
node dist/cli.js vote-once [hotWalletPrivateKey]
```
- **Arguments:**
  - `hotWalletPrivateKey` (optional): Private key of the hot wallet used for voting.

### **vote-nonstop**
Continuously votes in every eligible round in the Randgen Hub.
```bash
node dist/cli.js vote-nonstop [hotWalletPrivateKey]
```
- **Arguments:**
  - `hotWalletPrivateKey` (optional): Private key of the hot wallet used for voting.

---

## **Using as an SDK**

You can integrate the project programmatically into your TypeScript or JavaScript projects by using the SDK.

### **Installation**
Install the SDK using npm:

```bash
npm install mind-randgen-sdk
```

### **Exported Functions**
The following functions are available for import:
- `registerVoter`: Register a voter in the Randgen Hub.
- `checkHotWalletReward`: Check rewards associated with the hot wallet.
- `checkColdWalletReward`: Check rewards associated with the cold wallet.
- `fetchFheKeySet`: Fetch the FHE key set for encryption operations.
- `encrypt`: Encrypt a number using the FHE key set.
- `submitVote`: Submit a vote using an encrypted ciphertext.
- `voteOnce`: Perform a one-time vote in the Randgen Hub.
- `voteContinuously`: Continuously vote in all eligible rounds in the Randgen Hub.

### **Code Example**
Here is an example of generating a random number, encrypting it, and submitting a vote.
```typescript
import { encrypt, submitVote } from 'mind-randgen-sdk';

async function main() {
    try {
        // Generate a random number
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(`Generated random number: ${randomNumber}`);

        // Encrypt the random number
        const encryptedUrl = await encrypt(randomNumber);
        console.log(`Encrypted URL: ${encryptedUrl}`);

        // Submit the vote
        await submitVote(encryptedUrl);
        console.log('Vote submitted successfully.');
    } catch (error) {
        console.error('Error during the process:', error);
    }
}

main();
```

---

## **Configuration**

The CLI and SDK use a configuration file to store required settings. You can find the configuration in `src/config.ts`.

### **Environment Variables**
Configuration values like `hotWalletPrivateKey` can also be provided as environment variables:
```bash
MIND_HOT_WALLET_PRIVATE_KEY=your_private_key
MIND_COLD_WALLET_ADDRESS=your_cold_wallet_address
```
Refer to `src/config.ts` for more configuration options.

### **Configuration Priorities**
Command parameters > environment variables > config.ts

---

## **Development**

### **Scripts**
The following scripts are available:
- `npm run build`: Compiles the TypeScript code into JavaScript.
- `npm run cli`: Builds and runs the CLI tool.
- `npm run abi`: Generates TypeScript bindings for smart contract ABIs using `typechain`.

---

## **License**

This project is licensed under the **MIT License**.

---

## **Contact**

For questions or support, please contact [Mind Network Official Channels](https://mindnetwork.xyz/).
