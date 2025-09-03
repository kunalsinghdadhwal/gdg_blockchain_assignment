# SIDDH JAIN 24BCE5474
# I'm working on fork and other blockchain basics stuff for gdg interviews. 
# I'm making a a simple Solidity smart contract called "PersonalLocker" that lets the deployer (owner) store a secret message and a password. The contract should include a constructor, an owner-only update guarded by a password, an event for updates, and a public view to read the messages. 
# Personal Locker Assignment

**Name:** Siddh Jain  
**Registration Number:** 24BCE5474  

---

## Contract Explanation
The `PersonalLocker` contract allows the deployer (owner) to store a secret message with a password.  
- The constructor sets the owner, initial message, and password.  
- The owner can update the message only with the correct password.  
- Updates emit an event showing old and new messages.  
- Anyone can read the message via `viewLocker()`.  
- The password can be revealed only by the owner.  
- `receive` and `fallback` functions are included for handling ETH.  

This ensures message security with owner-only access and password protection.

---

### Deployment Details

#### Localhost
- Contract deployed successfully on Hardhat local node.  
- Initial message: `[Your Full Name]`  
- Updated message after password verification: **"Assignment Completed"**

#### Sepolia Testnet
- Contract deployed on Sepolia.  
- Message updated to **"Assignment Completed"**.  

**Transaction Hashes:**  
- Localhost Deployment: `0x....`  
- Localhost Update: `0x....`  
- Sepolia Deployment: `0x....`  
- Sepolia Update: `0x....`  

## Local Deployment & Update
**Deployment Output:**



**Update Output:**
---

## Sepolia Deployment & Update
**Deployment Tx Hash:** `0x...`  
**Update Tx Hash:** `0x...`

**Deployment Output:**

**Update Output:**

---

## Challenges
The main challenges were setting up Hardhat on Windows (execution policy, ESM issue) and configuring Sepolia network deployment with private keys. These were resolved by proper environment setup, using `.env` for secrets, and running scripts correctly with Hardhat.

# Some console ss involved ;-
<img width="871" height="553" alt="Screenshot 2025-09-03 010022" src="https://github.com/user-attachments/assets/561aaf6a-627b-472e-b3e6-d16ad5c39255" />
<img width="903" height="515" alt="Screenshot 2025-09-03 005727" src="https://github.com/user-attachments/assets/7ee10b9b-eb2b-473b-8169-1a47e9ac4abf" />
