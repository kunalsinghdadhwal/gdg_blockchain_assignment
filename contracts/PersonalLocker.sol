// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

contract PersonalLocker {
    address public owner;
    string private secretMessage;
    string private password;
    uint public block_contr;

    event MessageUpdated(string oldMessage, string newMessage);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor(string memory _message, string memory _password) {
        owner = msg.sender;
        secretMessage = _message;
        password = _password;
        block_contr = block.number;
    }

    function updateMessage(string memory _newMessage, string memory _password) public onlyOwner {
        require(keccak256(abi.encodePacked(_password)) == keccak256(abi.encodePacked(password)), "Wrong password");
        string memory old = secretMessage;
        secretMessage = _newMessage;
        emit MessageUpdated(old, _newMessage);
    }

    function readMessage() public view returns (string memory) {
        return secretMessage;
    }

    function printPassword() public view returns (string memory) {
        return password;
    }

    receive() external payable {}
    fallback() external payable {}

    