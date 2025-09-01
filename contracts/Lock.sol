// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

contract PersonalLocker {
    address public owner;
    string public secretMessage;
    string private secretPassword;
    string public block_contr;

    event MessageUpdated(string oldMessage, string newMessage);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    constructor(string memory initialMessage, string memory password) {
        owner = msg.sender;
        secretMessage = initialMessage;
        secretPassword = password;
        block_contr = "Block Contract";
    }

    function updateMessage(string memory newPassword, string memory newMessage) public onlyOwner {
        require(keccak256(abi.encodePacked(secretPassword)) == keccak256(abi.encodePacked(newPassword)), "Invalid password.");
        string memory oldMessage = secretMessage;
        secretMessage = newMessage;
        emit MessageUpdated(oldMessage, newMessage);
    }

    function getMessage() public view returns (string memory) {
        return secretMessage;
    }

    function getPassword() public view onlyOwner returns (string memory) {
        return secretPassword;
    }

    receive() external payable {
        // Fallback for receiving Ether
    }

    fallback() external payable {
        // Fallback for any other transaction
    }
}
