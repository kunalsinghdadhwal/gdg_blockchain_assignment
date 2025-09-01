# ***📦 Personal Locker Smart Contract*** 
---
# ***BY : TANISHQ GOYAL ( 24BCE1615 )***
---
The PersonalLocker smart contract is designed to provide a simple and secure way for the owner or the deployer to store and update a private message on the blockchain. When the contract is deployed, the owner sets an initial message and a password. Only the owner can update the stored message, and they must provide the correct password to do so. This ensures that unauthorized users cannot modify the content. Every time the message is updated, an event is emitted, making the change transparent and traceable on-chain. Anyone can read the stored message, but only the owner can change it.

During development, one of the main challenges was ensuring secure access control using both ownership and a password check. Another challenge was managing deployment across multiple networks i.e localhost and Sepolia , while avoiding manual address updates. This was solved by automating contract address storage in the .env file. Setting up Hardhat scripts for deployment, reading, and updating also required careful testing to confirm they worked seamlessly with both local and test networks. Overall, the project demonstrates fundamental principles of security, transparency, and automation in smart contract development.

---

✨ Features

Store a secret message with password protection.

Owner-only updates to change the message.

Emits events on every update.

Works seamlessly with Localhost (Hardhat) and Sepolia testnet.

Automatically saves contract addresses in .env.

---

# ⚙️ Deployment
## **1. Localhost Deployment**
npx hardhat run scripts/deploy.js --network localhost

**Output:**   <br>

📦 Deploying contract to localhost with password from .env... <br>

✅ Deployed to: 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9 <br>

📝 Updated .env with LOCAL_CONTRACT_ADDRESS=0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9 <br>

## **2. Sepolia Deployment**
npx hardhat run scripts/deploy.js --network sepolia

**Output:**  <br>

📦 Deploying contract to sepolia with password from .env...  <br>

✅ Deployed to: 0xac933e5f6ed9F1d58339783086Fd7ff6d67b280a  <br>

📝 Updated .env with SEPOLIA_CONTRACT_ADDRESS=0xac933e5f6ed9F1d58339783086Fd7ff6d67b280a  <br>

---

## **🔗 Network Contract Addresses**

Localhost	0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9  <br>

Sepolia	0xac933e5f6ed9F1d58339783086Fd7ff6d67b280a  <br>

---

## **📖 Reading the Message**
npx hardhat run scripts/read.js --network localhost

**Output (example):** <br>

🔗 Reading contract at: 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9  <br>

📖 Current Secret Message: Tanishq Goyal  <br>

⛓️ Block number at deployment: 5  <br>

--- 

## **✏️ Updating the Message**

npx hardhat run scripts/update.js --network localhost   <br>
 
Output (example):

🔗 Updating contract at: 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9   <br>

📖 Current Message: Tanishq Goyal   <br>

⏳ Transaction sent: 0x38bda3fe07b931693c71d81f935f2cfa8235139b5180c641e7939f3cbb8a0abc   <br>

✅ Message updated! Old: "Tanishq Goyal" → New: "Assignment Completed"   <br>

📢 Event caught → Old: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", New: "Tanishq Goyal", Updated Message: Assignment Completed   <br>

---

# ***📂 Project Structure***
personal-locker-assignment/ <br>
│── contracts/ <br>
│   └── PersonalLocker.sol <br>
│── scripts/ <br>
│   ├── deploy.js <br>
│   ├── read.js <br>
│   └── update.js <br>
│── .env <br>
│── hardhat.config.js <br>
│── README.md <br>

---
