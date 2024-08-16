//7. Owner Access:
     //a. Question: How can a smart contract restrict certain functions to only the contract owner?

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract OwnerAccess {
    // State variable to store the address of the contract owner
    address private owner;

    // Modifier to restrict access to only the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    // Constructor to set the contract owner to the account that deploys the contract
    constructor() {
        owner = msg.sender;
    }

    // Function only accessible by the owner
    function restrictedFunction() public onlyOwner {
        // Code for the restricted function
    }

    // Function accessible by anyone
    function publicFunction() public {
        // Code for the public function
    }

    // Function to get the current owner (public access)
    function getOwner() public view returns (address) {
        return owner;
    }
}