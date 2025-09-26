// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Lock is Ownable {
    string public message;
    string private password;
    uint public block_contract;

    error WRONG_PASSORD();

    event MessageUpdated(string oldMsg, string newMsg);

    constructor(
        string memory _message,
        string memory _password
    ) payable Ownable(msg.sender) {
        message = _message;
        password = _password;

        block_contract = block.number;
    }

    function updateMessage(
        string memory _newMsg,
        string memory _password
    ) public onlyOwner {
        if (
            keccak256(abi.encodePacked(password)) !=
            keccak256(abi.encodePacked(_password))
        ) {
            revert WRONG_PASSORD();
        }
        string memory oldMsg = message;
        message = _newMsg;
        emit MessageUpdated(oldMsg, _newMsg);
    }

    function readMsg() public view returns (string memory) {
        return message;
    }

    function showPsw() public view onlyOwner returns (string memory) {
        return password;
    }

    receive() external payable {}

    fallback() external payable {}
}
