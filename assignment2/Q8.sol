//8. Event Logging:
    //a. Question: How can a smart contract log events when certain actions are performed?

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract EventLogging {

    // Define an event to log when a value is set
    event ValueSet(address indexed setter, uint256 value);
    //Definition: An event is a mechanism in Solidity that allows a smart contract to log specific information to the blockchain. Events are declared in the contract and emitted during transactions.

    // State variable to store a value
    uint256 private storedValue;

    // Function to set a value and emit an event
    function setValue(uint256 _value) public {
        storedValue = _value;
        // Emit the ValueSet event
        emit ValueSet(msg.sender, _value); 
        //Emitting Events:
        //Definition: To log an event, you use the emit keyword followed by the event name and its parameters.
    }

    // Function to get the stored value
    function getValue() public view returns (uint256) {
        return storedValue;
    }
}