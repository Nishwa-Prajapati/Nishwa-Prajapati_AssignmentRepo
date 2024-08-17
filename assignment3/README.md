# This my assignment3

Assignmnet 3 : **IU2141230218_Nishwa Prajapati**
Submitting Date: 23/08/2024

# Instructions
Step 1 : Clone the repository

git clone  https://github.com/Nishwa-Prajapati/Nishwa-Prajapati_AssignmentRepo.git

Step 2 : run below command in you terminal.

# How to Deploy and Run the Contract

**Step 1: Deploy the Contract**

=> Open Remix IDE.

=> Create a new file named Lottery.sol and paste the contract code into it.

=> On the left panel, select the "Solidity Compiler" and click "Compile Lottery.sol".

=> After successful compilation, navigate to the "Deploy & Run Transactions" tab.

=> Ensure "Lottery" is selected in the contract dropdown.

=> Click "Deploy". The contract will be deployed, and the contract's address will be displayed in the "Deployed Contracts" section.

**Step 2: Participate in the Lottery**

=> To participate, copy the contract address and go to the "Deployed Contracts" section.

=> In the "Value" field, enter 1 and select ether from the dropdown.

=> Click the "receive()" function to send 1 Ether and join the lottery.

=> Repeat this step with at least two more participants.

**Step 3: Pick a Winner**

=> Once there are at least 3 participants, the contract owner can call the lotteryWinner() function.

=> The function will randomly select one of the participants as the winner and transfer all the Ether in the contract to them.

**Step 4: Check the Contract Balance**

=> The contract owner can check the balance at any time by calling the getBalance() function.

>**Input and Output**

=> Input: 1 Ether per participant.

=> Output: The entire contract balance is transferred to the randomly selected winner.


# Assignment Level :
The assignment level for this task is: Medium

# Code Quality :
Code quality is maintained throughout the assignment.
