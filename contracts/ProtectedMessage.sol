// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProtectedMessage {
    address public owner;
    string private message;
    bytes32 private passwordHash;

    event MessageUpdated(string oldMessage, string newMessage);

    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    modifier withPassword(string memory pass) {
        require(keccak256(bytes(pass)) == passwordHash, "wrong password");
        _;
    }

    constructor(string memory initialMessage, string memory password) {
        owner = msg.sender;
        message = initialMessage;
        passwordHash = keccak256(bytes(password));
    }

    function updateMessage(string calldata newMessage, string calldata password)
        external
        onlyOwner
        withPassword(password)
    {
        string memory old = message;
        message = newMessage;
        emit MessageUpdated(old, newMessage);
    }

    function readMessage() external view returns (string memory) {
        return message;
    }

    receive() external payable {}
    fallback() external payable {}
}
