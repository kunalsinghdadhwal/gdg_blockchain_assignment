// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

contract PersonalLocker {
    string private secretMessage;
    string private password;
    address public owner;
    string public block_contr;

    event MessageUpdated(string oldMessage, string newMessage);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(string memory _message, string memory _password) {
        owner = msg.sender;
        secretMessage = _message;
        password = _password;
        block_contr = "PersonalLockerContract";
    }

    function updateMessage(string memory _newMessage, string memory _password) public onlyOwner {
        require(keccak256(abi.encodePacked(_password)) == keccak256(abi.encodePacked(password)), "Wrong password");
        string memory oldMessage = secretMessage;
        secretMessage = _newMessage;
        emit MessageUpdated(oldMessage, _newMessage);
    }

    function getMessage() public view returns (string memory) {
        return secretMessage;
    }

    function getPassword() public view onlyOwner returns (string memory) {
        return password;
    }

    receive() external payable {}
    fallback() external payable {}
}
