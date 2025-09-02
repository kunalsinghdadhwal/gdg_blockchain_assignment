# PersonalLocker — GDG Blockchain Assignment

**Registration Number:** 24BCE1454  
**Name:** Vishal P

## Project Overview

This project implements a PersonalLocker smart contract that allows the deployer (owner) to store a secret message protected by a password. The contract provides secure message storage with owner-only access control and password verification.

## Contract Features

- **Owner-only Access**: Only the contract deployer can update the message
- **Password Protection**: Messages can only be updated with the correct password
- **Event Logging**: Emits events when messages are updated (without exposing the password)
- **Public Read Access**: Anyone can read the current message
- **Receive/Fallback Functions**: Contract can receive Ether

## How the Contract Works

The PersonalLocker contract uses a constructor to set the initial owner, message, and password hash upon deployment. The contract stores the password as a keccak256 hash for security. When updating the message, the contract verifies both owner authorization and password correctness using modifiers. Events are emitted to log message changes without exposing sensitive password information. The contract includes receive and fallback functions to handle Ether transfers.

## Environment Variables

```env
SECRET=ur contract password to update message
PRIVATE_KEY=metamask private key
RPC_URL=your_rpc_url_here
```
## Challenges Faced

During development, I encountered several learning challenges including understanding how to properly write test files for Solidity contracts and structuring deployment/interaction scripts. The Sepolia testnet deployment process was time-consuming due to network congestion and transaction confirmation delays. Learning the proper use of modifiers and event emission patterns required careful study of Solidity best practices.

## Development Process

### 1. Compiling
![Compilation Process](/Images/image.png)

### 2. Local Testing
![Local Testing](/Images/image-1.png)

### 3. Creating Local Network
![Local Network Setup](/Images/image-5.png)

### 4. Deploying and Interacting with Contract in Local Server
![Local Deployment and Interaction](/Images/image-4.png)

### 5. Deploying in Sepolia Testnet
![Sepolia Deployment - Step 1](/Images/image-3.png)
![Sepolia Deployment - Step 2](/Images/image-2.png)
![Final Deployment](/Images/image6.png)

## Deployment Details

### Sepolia Testnet Deployment
- **Contract Address:** `0x81BE25bdFaAA03776FfF149a92b6B1E8c663e832`
- **Deployment Transaction Hash:** `0x99e29e79586cde316c8305d4b521504a62b2be6d546fba30b64c0bd938c338d7`
- **Deployment Transaction Link:** [View on Etherscan](https://sepolia.etherscan.io/tx/0x99e29e79586cde316c8305d4b521504a62b2be6d546fba30b64c0bd938c338d7)

### Message Update Transaction
- **Update Transaction Hash:** `0x2538de6a61fbaaa5f757986b275cce5cc47bd35b7e5eb844f308776fe16b2f91`
- **Update Transaction Link:** [View on Etherscan](https://sepolia.etherscan.io/tx/0x2538de6a61fbaaa5f757986b275cce5cc47bd35b7e5eb844f308776fe16b2f91)

### Final Assignment Completion
- **Message:** "Assignment completed"
- **Transaction Hash:** `0xc68e239dc9bde50d4164f12056da0241e8589340d689dc651d3e77a4a2e8fad7`
- **Transaction Link:** [View on Etherscan](https://sepolia.etherscan.io/tx/0xc68e239dc9bde50d4164f12056da0241e8589340d689dc651d3e77a4a2e8fad7)
## Console Outputs

### Local Deployment Output
```bash
ProtectedMessage deployed to: [LOCAL_CONTRACT_ADDRESS]
```

### Local Interaction Output
```bash
Current Message: Intial Message
Updating message...
Updated Message: New Updated Message
```

### Sepolia Deployment Output
```bash
ProtectedMessage deployed to: 0x81BE25bdFaAA03776FfF149a92b6B1E8c663e832
```

### Sepolia Interaction Output
```bash
Current Message: Intial Message
Updating message...
Updated Message: New Updated Message
```

## Wallet Information
**Wallet Address:** `0x0CfB00Dc12f550D47A511Bb98B9fAE1D1240dcbA`

## Technologies Used

- **Solidity** ^0.8.0
- **Hardhat Framework**
- **Ethers.js**
- **Sepolia Testnet**
- **Alchemy RPC Provider**
- **Chai**

## Contract Requirements Fulfilled

✅ Constructor sets owner, initial message, and password upon deployment  
✅ Owner-only function to update message with password verification  
✅ Event emission on message updates (without exposing password)  
✅ Public view function to read current message  
✅ Solidity >= 0.8.0 compliance  
✅ Owner access modifier implementation  
✅ Receive and fallback functions included