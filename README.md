# PersonalLocker Assignment – Anish Gupta

- **Name:** Anish Gupta
- **Reg No.:** 24BAI1215
- **Branch:** personal-locker-assignment

---

## 📌 Contract Overview

- **Contract Name:** `Lock` (PersonalLocker variant)
- **Features:**
  - Stores an initial message and password on deployment.
  - Only owner can update the message, and only with the correct password.
  - Emits an event on updates with old and new messages.
  - Provides public view to read message.
  - `showPsw()` restricted to owner.
  - Includes `receive()` and `fallback()` functions.
  - Uses OpenZeppelin `Ownable` for owner access.

---

## 📌 How it Works (Explanation)

- On deployment, contract stores **initial message** (my full name) and a **secret password**.
- Only the deployer (owner) can update the message, but update requires the **correct password**.
- Update emits an event logging old and new messages (not the password).
- Any user can read the message using `readMsg()`.
- I used `keccak256` encoding to compare passwords, since Solidity does not support direct string comparison.
- The contract was tested locally with Hardhat and deployed successfully on Sepolia testnet.

---

## 📌 Challenges Faced

- I usually work with **Foundry (forge)** for scripting, testing, and deployment.
- Writing scripts in **JavaScript for Hardhat** was a bit challenging since it was a new workflow for me.
- Understanding how to use `ethers` with Hardhat to attach, deploy, and interact took some time.
- Everything else including writing the contract logic and using OpenZeppelin was straightforward.

---

## 📌 Transactions

- **Localhost Deployment Tx Hash:** (local doesn’t give real hash, only console logs shown below)
- **Localhost Update Tx Hash:** (same as above, console logs below)
- **Sepolia Deployment Tx Hash:** https://sepolia.etherscan.io/tx/0xdd41c9318a4af0af6617d4446812806e9e22a645b7a3c3be720007be9298bde8
- **Sepolia Update Tx Hash:** https://sepolia.etherscan.io/tx/0x0e945dd8f42e9d15330b7058076614808ce336ddd2d9837e9e46af757da55456

---

## 📌 Console Outputs

### Localhost Deployment

```bash
npx hardhat run script/deploy.js --network localhost

Lock deployed to: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
Initial message: Anish Gupta
```

### Localhost Update

```bash
npx hardhat run script/updatemsg.js --network localhost

Current message: Anish Gupta
Message updated!
New message: Assignment Completed
```

### Sepolia Deployment

```bash
npx hardhat run script/deploy.js --network sepolia

Lock deployed to: 0x1245603ca4D43010523d2b0fD47ea54AaD60a6aB
Initial message: Anish Gupta
```

### Sepolia Update

```bash
npx hardhat run script/updatemsg.js --network sepolia

Current message: Anish Gupta
Message updated!
New message: Assignment Completed
```
