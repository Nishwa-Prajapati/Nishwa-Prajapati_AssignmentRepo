# This is my assignment2

Assignmnet 2 : IU2141230218_Nishwa Prajapati

Submitting Date: 16/08/2024

# Instructions

Step 1 : Clone the repository

git clone https://github.com/Nishwa-Prajapati/Nishwa-Prajapati_AssignmentRepo.git

Step 2 : run below command to run the contracts

=> Running the Contracts Using Remix IDE

=> Go to Remix IDE.

=> Create a new file for each smart contract. Copy and paste the Solidity code from this repository into the corresponding file.

=> Compile the contract by navigating to the "Solidity Compiler" tab and clicking the "Compile" button.

=> Deploy the contract by going to the "Deploy & Run Transactions" tab, selecting the appropriate contract, and clicking "Deploy".

=> Interact with the deployed contract using the Remix interface.

# Codes:

** Q1 : **

   1. Hello World Contract
      
Description:
A simple contract that returns a fixed message, "Hello, World!".

Input:
None

Output:
Returns the string "Hello, World!".

** Q2 : **

   2. Simple Storage
      
Description:
This contract allows storing and retrieving a single integer value.

Input:
set(uint256 _number) - An integer value to store.

Output:
get() - Returns the stored integer value.

** Q3 : **

   3. Greeting Contract
      
Description:
Allows users to set and get a personalized greeting message.

Input:
setGreeting(string memory _message) - A string message to store.

Output:
getGreeting() - Returns the stored greeting message.

** Q4 : **

   4. Simple Counter
      
Description:
A contract that keeps track of a count and allows it to be incremented.

Input:
None

Output:
getCount() - Returns the current count value.

** Q5 : **

   5. Name Storage
      
Description:
Stores and retrieves a user's name.

Input:
setName(string memory _name) - A string representing the user's name.

Output:
getName() - Returns the stored user's name.

** Q6 : **

   6. Basic Voting
      
Description:
Allows users to vote for a candidate and keeps track of votes.

Input:
vote(string memory _candidate) - Name of the candidate to vote for.

Output:
getVotes(string memory _candidate) - Returns the number of votes for the specified candidate.

** Q7 : **

   7. Owner Access
      
Description:
Restricts certain functions to only the contract owner.

Input:
None

Output:
Access to restrictedFunction is limited to the contract owner.

** Q8 : **

   8. Event Logging
      
Description:
Logs events when certain actions are performed.

Input:
performAction(string memory _action) - Description of the action performed.

Output:
Logs an ActionLogged event with the sender’s address and action description.

** Q9 : **

   9. Simple Ledger
       
Description:
Maintains a ledger of transactions with basic entries.

Input:
addTransaction(uint256 _amount, string memory _description) - Amount and description for the transaction.

Output:
getTransaction(uint256 _index) - Returns the transaction details at the specified index.

** Q10 : **

   10. Message Storage
       
Description:
Allows a user to store and retrieve a message string.

Input:
setMessage(string memory _message) - A string message to store.

Output:
getMessage() - Returns the stored message.

# Assignment Level :
The assignment level for this task is: Medium

# Code Quality :
Code quality is maintained throughout the assignment.
