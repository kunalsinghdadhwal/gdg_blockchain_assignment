// SPDX-License-Identifier: Apache-2.0
pragma solidity >= 0.8.0;

contract PersonalLocker {
    address public owner;
    string private secretMessage;
    string private password;
    string public block_contr;
    
    event MessageUpdated(string oldMessage, string newMessage);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }
    
    constructor(string memory _initialMessage, string memory _password) {
        owner = msg.sender;
        secretMessage = _initialMessage;
        password = _password;
        block_contr = "PersonalLocker Smart Contract";
    }
    
    function updateMessage(string memory _newMessage, string memory _inputPassword) public onlyOwner {
        require(keccak256(abi.encodePacked(_inputPassword)) == keccak256(abi.encodePacked(password)), "Incorrect password");
        string memory oldMessage = secretMessage;
        secretMessage = _newMessage;
        emit MessageUpdated(oldMessage, _newMessage);
    }
    
    function readMessage() public view returns (string memory) {
        return secretMessage;
    }
    
    function getPassword() public view onlyOwner returns (string memory) {
        return password;
    }
    
    receive() external payable {
        
    }
    
    fallback() external payable {
        
    }
}