// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PersonalLocker {
    address public owner;
    string private secretMessage;
    string private password;
    uint256 public block_contr;

    // 🔔 Event for updates
    event MessageUpdated(address indexed owner, string oldMessage, string newMessage);

    // 🔒 Modifier for owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not contract owner");
        _;
    }

    constructor(string memory _initialMessage, string memory _password) {
        owner = msg.sender;
        secretMessage = _initialMessage;
        password = _password;
        block_contr = block.number;
    }

    // 📌 Owner-only update with password check
    function updateMessage(string memory _newMessage, string memory _password) external onlyOwner {
        require(keccak256(abi.encodePacked(_password)) == keccak256(abi.encodePacked(password)), "Wrong password");

        string memory old = secretMessage;
        secretMessage = _newMessage;

        emit MessageUpdated(msg.sender, old, _newMessage);
    }

    // 📖 Public read
    function readMessage() external view returns (string memory) {
        return secretMessage;
    }

    // 🛡️ Fallback & Receive
    receive() external payable {}
    fallback() external payable {}
}
