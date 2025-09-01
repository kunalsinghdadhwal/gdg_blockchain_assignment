# GDG Personal Locker Assignment

This project contains a Solidity smart contract called "PersonalLocker" and the scripts required to deploy and interact with it using Hardhat.

Student Information
Registration Number: 25BCE5209

Name: Mohammed Mubashir Hasan


## Output as requested in the assignment:

<img width="841" height="268" alt="assignmentConsole" src="https://github.com/user-attachments/assets/41ddbec3-0e8d-42b1-a668-a1486214a35a" />


<img width="641" height="121" alt="assignmentMessage" src="https://github.com/user-attachments/assets/93ac6371-b245-462b-9ceb-c9d51c9bb670" />
<img width="1334" height="316" alt="image" src="https://github.com/user-attachments/assets/5e547346-f597-4f5c-ac9a-7a21db860178" />

<img width="662" height="182" alt="assignmentSeploiaMessage" src="https://github.com/user-attachments/assets/092038c8-e583-451a-a540-65ae592cb65b" />

<img width="915" height="423" alt="done" src="https://github.com/user-attachments/assets/556c1862-398c-4a70-8f74-02a76f72c44a" />

## Working

The PersonalLocker contract establishes an owner upon deployment, which is set in the constructor along with an initial message and a password. Access to the critical updateMessage function is restricted to this owner using an onlyOwner modifier, ensuring only they can attempt changes.

To update the secret message, the owner must call this function and provide the correct password, which is verified by the contract's logic. If the password matches, the contract creates a MessageUpdated event—logging the old and new message for off-chain tracking—and updates the message state variable. A public getMessage view function allows anyone to read the current message without restriction.

## Challenges Faced

The primary challenge was correctly configuring the Hardhat environment, especially the .env and hardhat.config.js files, to connect to the Sepolia testnet. Initial attempts with public RPC URLs (lol i shouldn't be doing this but i'm naming it: chainlist) led to "Too Many Requests" errors, which required switching to a dedicated provider like Infura for a stable connection.

Another challenge involved carefully updating the update.js script with the correct deployed contract address for each network. Finally, the network congestion on Sepolia caused transaction delays, took a lot of time waiting for confirmations to appear on the blockchain.
