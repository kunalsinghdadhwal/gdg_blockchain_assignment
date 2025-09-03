// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract PersonalLocker {
    string private message;
    bytes32 private hashedPassword;
    address public owner;
    
    event MessageUpdated(string newMessage);
    
    constructor(string memory _initialMessage, string memory _password) {
        message = _initialMessage;
        hashedPassword = keccak256(abi.encodePacked(_password));
        owner = msg.sender;
    }
    
    function updateMessage(string memory _newMessage, string memory _password) external {
        require(keccak256(abi.encodePacked(_password)) == hashedPassword, "Incorrect password");
        message = _newMessage;
        emit MessageUpdated(_newMessage);
    }
    
    function getMessage() external view returns (string memory) {
        return message;
    }
}