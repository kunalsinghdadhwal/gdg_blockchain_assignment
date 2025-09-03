// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.28;

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

    constructor(string memory _message, string memory _password) {
        owner = msg.sender;
        secretMessage = _message;
        password = _password;
        block_contr = "Personal Locker Active";
    }

    function updateMessage(string memory _newMessage, string memory _password) public onlyOwner {
        require(keccak256(bytes(_password)) == keccak256(bytes(password)), "Wrong password");
        string memory old = secretMessage;
        secretMessage = _newMessage;
        emit MessageUpdated(old, _newMessage);
    }

    function readMessage() public view returns (string memory) {
        return secretMessage;
    }

    function revealPassword() public view onlyOwner returns (string memory) {
        return password;
    }

    receive() external payable {}
    fallback() external payable {}
}
