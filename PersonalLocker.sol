// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

contract PersonalLocker {
    string public message;
    string private password;
    string public block_contr;

    event MessageUpdated(string oldMessage, string newMessage);

    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor(string memory _msg, string memory _pass) {
        owner = msg.sender;
        message = _msg;
        password = _pass;
        block_contr = "PersonalLocker";
    }

    function updateMessage(string memory _pass, string memory _newMsg) public onlyOwner {
        require(keccak256(abi.encodePacked(_pass)) == keccak256(abi.encodePacked(password)), "Incorrect password");
        string memory oldMessage = message;
        message = _newMsg;
        emit MessageUpdated(oldMessage, message);
    }

    function showPassword() public view returns(string memory) {
        return password;
    }

    receive() external payable {}
    fallback() external payable {}
}
