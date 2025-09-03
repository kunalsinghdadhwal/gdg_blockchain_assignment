# PersonalLocker - GDG Blockchain Assignment

- *Name: Naveen Kasi S 
- *Registration Number:24BLC1359

---

## Contract Explanation

The `PersonalLocker` smart contract is a secure digital vault deployed on the Ethereum blockchain, designed to store a private message protected by a password. The contract's deployer is designated as the `owner`, a role enforced by an `onlyOwner` modifier which restricts access to sensitive functions.

Upon deployment, the `constructor` initializes the owner's address, an initial secret message, and a password. The core functionality lies in the `updateMessage` function, which allows the owner, and only the owner, to change the secret message. This function is doubly protected: it first verifies the caller's identity via the `onlyOwner` modifier and then requires the correct password to be provided as an argument, ensuring a two-factor style of on-chain security.

To maintain a transparent history of changes, the contract emits a `MessageUpdated` event each time the message is successfully updated. This event logs the old and new messages, providing a valuable off-chain record without ever exposing the password. A public `getMessage` view function allows anyone to read the current message.

---

## Challenges Faced

One of the primary challenges was correctly configuring the Hardhat project for deployment to a live testnet like Sepolia. This involved several steps beyond just writing the code. I had to create an Alchemy project to get a reliable RPC URL and learn to securely manage my wallet's private key by storing it in a `.env` file. A key lesson was modifying the `hardhat.config.js` file to load these environment variables and properly define the Sepolia network. This process taught me the importance of a secure and professional deployment workflow, which is a crucial step in moving from local development to a real-world blockchain application.

---

## Transaction Hashes

- **Sepolia Deployment TX Hash:** 0x1f8c8788932bf5da5b70d29cdadf14e2a2c049b623fa5a26ea5445d3c855d556
- **Sepolia Update TX Hash:** 0xcb9e33785278ed88295d8850e4179b6023b23cc5421cd5daf5ac4a0b88b78f04

---

## Console Outputs

### Localhost Deployment
```
Deploying PersonalLocker contract...
PersonalLocker deployed successfully!
Contract address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Initial message: "Naveen Kasi"
```

### Localhost Update
```
Connecting to contract at: 0x5FbDB2315678afecb367f032d93F642f64180aa3
The old message is: "Naveen Kasi"
Updating message to: "Assignment Completed"...
Update transaction successful! Transaction hash: 0x7fe20b69cdcc376983954caa8b0fa85521dff4a8d7de52cea31cd2dcf0b30122
The new message is: "Assignment Completed"
```

### Sepolia Testnet Deployment
```
Compiled 1 Solidity file successfully (evm target: paris).
[dotenv@17.2.1] injecting env (0) from .env -- tip:  prevent building .env in docker: https://dotenvx.com/prebuild
Deploying PersonalLocker contract...
PersonalLocker deployed successfully!
Contract address: 0x162FD1c0b2a8d3A1009A3A58fdea0Bd8E50f9fB2
Initial message: "Naveen Kasi"
```

### Sepolia Testnet Update
```
Connecting to contract at: 0x162FD1c0b2a8d3A1009A3A58fdea0Bd8E50f9fB2
The old message is: "Naveen Kasi"
Updating message to: "Assignment Completed"...
Update transaction successful! Transaction hash: 0xcb9e33785278ed88295d8850e4179b6023b23cc5421cd5daf5ac4a0b88b78f04
The new message is: "Assignment Completed"
```
