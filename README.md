# PersonalLocker

This repository contains my submission for the blockchain assignment. I built a Solidity smart contract called **PersonalLocker** which lets the deployer(owner) store a secret message and password. The contract has update and read functionality, plus basic access control.

---

## Contract Overview (Working)

- Sets the deployer as the owner when deployed.
- Stores an initial message and password at deployment.
- Allows only the owner to update the message (correct password only).
- Emits an event whenever the message is updated (logs old and new message).
- Public view function to read the current message.
- Function to return the password (as in when required).
- Includes `receive` and `fallback` functions, meaning it can safely      handle ETH transfers sent directly to it.

---
## Challenges Faced  

- Faced some Solidity version mismatches at the start and fixed them by updating the Hardhat config.   
- Made sure access control worked properly by testing wrong-password reverts.  
- Had to manage and store contract addresses using JSON files for different networks.  
- Updated deploy and update scripts to make them easier to run multiple times.  
- Initially, the deployment script did not show the transaction hash — added logging to display it.  
- On localhost, the transaction hash wasn’t showing because of `waitForDeployment()`, so adjusted the code to fetch it directly.  

---

## Deployment & Testing
- Deployed locally using Hardhat  
- Deployed on Sepolia using `Google Cloud Web3 RPC`
- Transaction hashes included below

---

### Transaction Hashes

- **Deployment (Sepolia):** 0xabc1234567890abcdef1234567890abcdef1234567890abcdef1234567890
- **Update (Sepolia):** 0xdef4567890abcdef1234567890abcdef1234567890abcdef1234567890abcd

---

### Localhost
- **A. Start the Hardhat node**
---
```bash
   npx hardhat node
```
    
```text
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

Account #2: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC (10000 ETH)
Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a

Account #3: 0x90F79bf6EB2c4f870365E785982E1f101E93b906 (10000 ETH)
Private Key: 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6

Account #4: 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65 (10000 ETH)
Private Key: 0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a

Account #5: 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc (10000 ETH)
Private Key: 0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba

Account #6: 0x976EA74026E726554dB657fA54763abd0C3a0aa9 (10000 ETH)
Private Key: 0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e

Account #7: 0x14dC79964da2C08b23698B3D3cc7Ca32193d9955 (10000 ETH)
Private Key: 0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356

Account #8: 0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f (10000 ETH)
Private Key: 0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97

Account #9: 0xa0Ee7A142d267C1f36714E4a8F75612F20a79720 (10000 ETH)
Private Key: 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6

Account #10: 0xBcd4042DE499D14e55001CcbB24a551F3b954096 (10000 ETH)
Private Key: 0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897

Account #11: 0x71bE63f3384f5fb98995898A86B02Fb2426c5788 (10000 ETH)
Private Key: 0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82

Account #12: 0xFABB0ac9d68B0B445fB7357272Ff202C5651694a (10000 ETH)
Private Key: 0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1

Account #13: 0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec (10000 ETH)
Private Key: 0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd

Account #14: 0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097 (10000 ETH)
Private Key: 0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa

Account #15: 0xcd3B766CCDd6AE721141F452C550Ca635964ce71 (10000 ETH)
Private Key: 0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61

Account #16: 0x2546BcD3c84621e976D8185a91A922aE77ECEc30 (10000 ETH)
Private Key: 0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0

Account #17: 0xbDA5747bFD65F08deb54cb465eB87D40e51B197E (10000 ETH)
Private Key: 0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd

Account #18: 0xdD2FD4581271e230360230F9337D5c0430Bf44C0 (10000 ETH)
Private Key: 0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0

Account #19: 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199 (10000 ETH)
Private Key: 0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

```
---
- **B. Deploy the contract on the local Hardhat network**
---
- **Command**
```bash
npx hardhat run scripts/deploy.js --network localhost
```

- **Output**
```text
Deploying contract with account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
PersonalLocker deployed at: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Saved deployment info for network: localhost
```

---
- **C. Run the update script on the local Hardhat network**
---
- **Command**
```bash
npx hardhat run scripts/update.js --network localhost
```
- **Output**
```text
Message updated to: Assignment Completed
```

---
- **D. Deploy the contract on the Sepolia testnet**
---
- **Command**
```bash
npx hardhat run scripts/deploy.js --network sepolia
```
- **Output**

```text
Deploying contract with account: 0x7c03E0e573b0d9216A7Aca63a460646583bD57Cd
PersonalLocker deployed at: 0x8E9b8605107ea2D0207A868de44E39e071F105C2
Saved deployment info for network: sepolia
```

---
- **E. Run the update script on the Sepolia testnet**
---
- **Command**
```bash
npx hardhat run scripts/update.js --network sepolia
```
- **Output**
```text
Message updated to: Assignment Completed
```
---

### Transaction Hashes
---
Localhost Deploy: 0x0a764c7e1cd26609e3c81b214e41969cde05de410bc352de7cb6ea4ba9d41c15

Localhost Update: 0x676085fa0b48be84fc7485316e3efbec946c2c5817304628afb05ee6d8d05720

Sepolia Deploy: 0x71d4a585238888a09704fd5ccaf7c4083cc52d232bca658239a8710b36209047

Sepolia Update: 0xcb761d1bfdd0019af4e076e1e65a9241311c75e440a27ac3b18f1e89a24502d2

---

## Tech Stack
- **Solidity (v0.8.28)** – for writing the smart contract  
- **Hardhat** – for compiling, deploying, and testing the contract  
- **Ethers.js (v6.13.2)** – to interact with the blockchain in scripts  
- **Node.js & npm** – for running scripts and managing dependencies  
- **Google Cloud Web3 RPC (Sepolia)** – to connect and deploy on the Sepolia testnet

## Author
- **Name** - Daksh Sameer Sablok
- **Registration Number**- 25BAI1227
---
[GitHub](https://github.com/scalicious) | [LinkedIn](https://linkedin.com/in/daksh-sablok-b0349a343)    
---