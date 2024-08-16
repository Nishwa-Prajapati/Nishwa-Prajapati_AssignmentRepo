//5. Name Storage:
  //a. Question: How can a smart contract store and retrieve a user's name?

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract NameStorage {
    // State variable to store the user's name
    string private name;

    // Function to set the user's name
    function setName(string memory username) public {
        name = username;
    }

    // Function to get the user's name
    function getName() public view returns (string memory) {
        return name;
    }
}