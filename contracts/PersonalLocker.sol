// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

contract PersonalLocker {
    address public owner;
    string private password;
    string public block_contr; // public variable for assignment requirement

    event MessageUpdated(string oldMessage, string newMessage);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(string memory initialMessage, string memory initialPassword) {
        owner = msg.sender;
        password = initialPassword;
        block_contr = initialMessage; // set initial message dynamically
    }

    function updateMessage(string memory newMessage, string memory pass) public onlyOwner {
        require(keccak256(bytes(pass)) == keccak256(bytes(password)), "Incorrect password");
        string memory oldMessage = block_contr;
        block_contr = newMessage;  // update the public message
        emit MessageUpdated(oldMessage, newMessage);
    }

    function readMessage() public view returns (string memory) {
        return block_contr;
    }

    function revealPassword() public view onlyOwner returns (string memory) {
        return password;
    }

    receive() external payable {}
    fallback() external payable {}
}
