# Sample Hardhat Project
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

## Local Deployment & Update
**Deployment Output:**

