//10. Message Storage:
   //a. Question: How can a smart contract allow a user to store and retrieve a message string?

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MessageStorage {
    // Variable to store the message
    string private message;

    // Function to store a message
    //set message in input should be in " "
    function setMessage(string memory messagestring) public {
        message = messagestring;
    }

    // Function to retrieve the stored message
    function getMessage() public view returns (string memory) {
        return message;
    }
}