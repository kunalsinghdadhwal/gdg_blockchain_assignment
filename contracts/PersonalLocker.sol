// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

contract PersonalLocker {
    address payable public owner;
    string public secretMessage;
    string private secretPassword;
    uint public block_contr;

    event MessageUpdated(string oldMessage, string newMessage);
    event Received(address indexed sender, uint amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner!");
        _;
    }

    constructor(string memory initialMessage, string memory initialPassword) {
        owner = payable(msg.sender);
        secretMessage = initialMessage;
        secretPassword = initialPassword;
        block_contr = block.number;
    }

    function updateMessage(string memory newMessage, string memory passwordTry) public onlyOwner {
        require(keccak256(abi.encodePacked(passwordTry)) == keccak256(abi.encodePacked(secretPassword)), "Incorrect password!");
        
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
        emit Received(msg.sender, msg.value);
    }

    fallback() external payable {
        emit Received(msg.sender, msg.value);
    }
}