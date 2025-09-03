# Registration Number : 25BEC1392 
# Name                : JAIDEV K  
# Project             : Personal Locker

**Overview**
The PersonalLocker contract allows the deployer (owner) to store a secret message along with a password. The owner can update the message only by providing the correct password. The contract emits an event whenever the message is updated and provides a public view function to read the message

**Pre-requisites**
1. Need Node.js in your local machine, In case, its not available Download node.js msi installer from https://nodejs.org/en/download/ ( For Windows )

**Development steps** 
1. Created a folder called "C:\blockchainpersonallocker"
2. Used PowerShell to install install hardhat **npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox dotenv**
3. Create a javascript projects so that it creates the necessary folders required for the project like contracts, scripts etc.,

**Key files**
1. contracts/PersonalLocker.sol - Contract files
2. scripts/deploy.js - Deployment Script
3. scripts/update.js - Update Script per requirement
4. scripts/read.js   - Reading the message (segregation of functions )
5. hardhat.config - Config file
6. .env file - This is not added in the repository as it contains sensitive information ( SECRET_PASSWORD, SEPOLIA_RPC_URL, PRIVATE_KEY)

**Commands to run in local machine**
1. Start local blockchain **npx hardhat node**
2. Deploy contract locally **npx hardhat run scripts/deploy.js --network localhost**
3. Update the contract with the message "Assignment Completed" **npx hardhat run scripts/update.js --network localhost** 

**Screenshots**
<img width="940" height="550" alt="image" src="https://github.com/user-attachments/assets/255ce8ee-8ed2-423f-890a-045a90b6daa5" />

