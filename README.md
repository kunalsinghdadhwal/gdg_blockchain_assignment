Personal Locker Assignment

Name: Jeshron Joseph  
Reg No: 24BCE5344

PersonalLocker deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Owner: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Initial message: Jeshron Joseph
Block number: 1n

Updating message...
Message updated successfully!
Error: could not decode result data (value="0x", info={ "method": "getMessage", "signature": "getMessage()" }, code=BAD_DATA, version=6.15.0)

## Contract Explanation
The PersonalLocker contract is a secure messaging system that allows the contract owner to store and update a secret message protected by a password. Key features include:

- **Owner Access Control**: Only the deployer can update the message
- **Password Protection**: Message updates require correct password verification
- **Event Logging**: Emits events when messages are updated (excluding passwords)
- **Block Tracking**: Stores the deployment block number in `block_contr` variable
- **SPDX License**: Uses Apache-2.0 license identifier

The contract uses keccak256 hashing for secure password comparison and includes both receive and fallback functions for Ethereum compatibility.

## Challenges Faced
The main challenge encountered was a BAD_DATA error when attempting to read the message string back from the contract using the `getMessage()` function

## Technical Details
- **SPDX License Identifier**: Apache-2.0
- **Solidity Version**: 0.8.28
- **Key Variables**: 
  - `address public owner` - Contract deployer address
  - `string private message` - Secret message storage
  - `string private password` - Password storage
  - `uint256 public block_contr` - Deployment block number
- **Key Functions**:
  - `updateMessage()` - Owner-only password-protected message update
  - `getMessage()` - Public view function to read message
  - `getPassword()` - Owner-only password retrieval
- **Events**: `MessageUpdated` - Logs old and new messages

