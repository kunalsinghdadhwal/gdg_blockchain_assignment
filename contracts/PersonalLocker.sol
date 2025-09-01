// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

contract PersonalLocker {
    address public owner;
    string public message;
    string public password;
    uint256 public block_contr;
    
    event MessageUpdated(string oldMessage, string newMessage);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    constructor(string memory _initialMessage, string memory _password) {
        owner = msg.sender;
        message = _initialMessage;
        password = _password;
        block_contr = block.number;
    }
    
    function updateMessage(string memory _newMessage, string memory _providedPassword) public onlyOwner {
        require(keccak256(abi.encodePacked(_providedPassword)) == keccak256(abi.encodePacked(password)), "Incorrect password");
        string memory oldMessage = message;
        message = _newMessage;
        emit MessageUpdated(oldMessage, _newMessage);
    }
    
    function getPassword() public view onlyOwner returns (string memory) {
        return password;
    }
    
    function getMessage() public view returns (string memory) {
        return message;
    }
    
    receive() external payable {}
    
    fallback() external {}
}
