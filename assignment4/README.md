# This my assignment 4

>Assignmnet 3 : **IU2141230218_Nishwa Prajapati**

Submitting Date: 06/09/2024

# Instructions
Step 1 : Clone the repository

git clone  https://github.com/Nishwa-Prajapati/Nishwa-Prajapati_AssignmentRepo.git

## Hash Generation and Solidity Smart Contract (Q1, Q2, Q3, Q5)

This repository contains three JavaScript code snippets and a Solidity smart contract for various tasks including generating SHA-256 hashes with a specific prefix and a donation-based smart contract for Ethereum.

**1. Hash Generation in JavaScript**

### Code 1: Simple Hash Generation

This code generates an SHA-256 hash from an input string, starting from 0, and searches for a hash that begins with "00000".

**How It Works:**

-Uses the crypto module to create a SHA-256 hash.

-Continuously increments the input number until a hash with the desired prefix is found.

### Code 2: Hash Generation with Custom Prefix

This code generates an SHA-256 hash by combining a fixed string ("nishwaprajapati01") with an incrementing number, and searches for a hash that begins with "00000".

**How It Works:**
-The function adds the fixed string to an incrementing number and generates a hash.

-It continues incrementing until the hash starts with the desired prefix.

### Code 3: Transaction-Based Hash Generation

This code generates a hash from a formatted transaction string and a number. The goal is to find a hash that begins with "00000".

**How It Works:**
-Converts transactions (like ["Dev", "Karan", 100]) into a specific format.

-Generates a hash using the transaction string and an incrementing number.

-Searches for a hash with the desired prefix.

### code 4 : CryptoZombies Solidity Learning

**Screenshot from Lesson 1**
Contains a screenshot (Q4.png) from the CryptoZombies lesson, showcasing the completion of Lesson 1 in Solidity programming.

### code 5 : Donation Smart Contract

This Solidity contract allows individuals to donate or transfer funds from their personal accounts to various recipients on the Ethereum blockchain.

**How It Works:**
-Maintains a balance for each user.

-Allows deposits and transfers to other users.

-Provides functionality for users to withdraw their balance.

**To Run:**
-Open Remix IDE: Remix Ethereum IDE

-Paste the Solidity code into a new file.

-Compile the code using the Solidity compiler.

-Deploy the contract to a test network.

# Assignment Level :
The assignment level for this task is: Medium

# Code Quality :
Code quality is maintained throughout the assignment.


