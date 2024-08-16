//9. Simple Ledger:
    //a. Question: How can a smart contract maintain a ledger of transactions with basic entries?

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SimpleLedger {
    // Struct to store transaction details --> datastructure
    struct Transaction {
        address from;
        address to;
        uint amount;
        uint timestamp;
    }

    // Array to store transactions
    Transaction[] private transactions;  // -->array created

    // Event to emit when a new transaction is recorded
    event TransactionRecorded(address indexed from, address indexed to, uint amount, uint timestamp);

    // Function to record a new transaction
    function recordTransaction(address _to, uint _amount) public {
        Transaction memory newTransaction = Transaction({
            from: msg.sender,
            to: _to,
            amount: _amount,
            timestamp: block.timestamp
        });

        transactions.push(newTransaction);

        emit TransactionRecorded(msg.sender, _to, _amount, block.timestamp);
    }

    // Function to get the number of transactions
    function getTransactionCount() public view returns (uint) {
        return transactions.length;
    }
}