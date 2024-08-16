//2. Simple Storage:
   //a. Question: How can a smart contract store and retrieve a single integer value?

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SimpleStorage {
    // State variable to store an integer value
    uint256 public storedData;

     // Function to set the value of storedData
    function set(uint256 x) public {
        storedData = x;
    }
}


