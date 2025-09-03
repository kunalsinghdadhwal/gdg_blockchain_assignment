// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PersonalLocker {
    address owner;
    string public srtmsg;
    uint passwd;
    string public Recent_trans_status;
    
    constructor(string memory _srtmsg, uint _passwd) {
        owner = msg.sender;
        srtmsg = _srtmsg;
        passwd = _passwd;
    }

    modifier Owner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    event Srtmsg_Change(string oldst, string newst);

    function srtmsg_change(uint _passwd,string memory __srtmsg) public Owner {
        require(passwd == _passwd,"Incorrect password");
        emit Srtmsg_Change(srtmsg, __srtmsg);
        srtmsg= __srtmsg;
    }

    receive() external payable {
        Recent_trans_status = "Your transaction was successful through receive";
    }

    fallback() external payable {
        Recent_trans_status = "Your transaction was successful through fallback";
    }
    

}
