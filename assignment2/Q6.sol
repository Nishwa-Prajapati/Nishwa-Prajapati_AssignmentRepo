//6. Basic Voting:
  //a. Question: How can a smart contract allow users to vote for a candidate and keep track of votes?

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract BasicVoting {
    // Define two candidates
    //0 for nishwa and 1 for khushi
    enum Candidate { nishwa, khushi }
    
    // This mapping tracks the number of votes for each candidate.
    mapping(Candidate => uint256) private votes;

    //This function allows users to vote for a candidate.
    // vote if for casting the vote
    function vote(Candidate candidatechoice) public {
        votes[candidatechoice] += 1;
    }

    // Function to get the number of votes for a candidate
    //getvotes is to know the number of votes for nishwa and khushi by entering there voting number
    function getVotes(Candidate _candidate) public view returns (uint256) {
        return votes[_candidate];
    }
}