//3. Greeting Contract:
   //a. Question: How can a smart contract allow a user to set and get a personalized greeting message?

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract GreetingContract {
    // State variable to store the greeting message
    string private greeting;

    // Function to set the greeting message
    function setGreeting(string memory message) public {
        greeting = message;
    }

    // Function to get (retrieve) the set greeting message
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}