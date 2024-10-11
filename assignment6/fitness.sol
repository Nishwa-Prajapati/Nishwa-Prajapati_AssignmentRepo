// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FitnessClubRewards {

    // owner
    address public owner;

    struct Member {
        uint256 totalRewards;
        bool exists;
    }

    mapping(address => Member) public members;

    //Events
    event RewardsEarned(address indexed member, uint256 amount);
    event RewardsReedemed(address indexed member, uint256 amount);

    modifier onlyOwner()
    {
        require(msg.sender == owner,"You are not authorized");
        _;
    }

     modifier onlyMember()
    {
        require(members[msg.sender].exists,"You are not authorized");
        _;
    }

    constructor()
    {
        owner = msg.sender;
    }

    function addMember(address _member) external onlyOwner {
        require(members[_member].exists,"Member Already Exsists");
        members[_member] = Member(0,true);
    }

      function deleteMember(address _member) external onlyOwner {
        require(members[_member].exists,"Member does'nt Exsists");
        delete members[_member];
    }

    function checkRewards() external view onlyMember returns (uint256)
    {
        return members[msg.sender].totalRewards;
    }

    function assignRewards(uint _amount, address _memberAddress) external onlyOwner {
        require(members[_memberAddress].exists,"Member does'nt exists");
        members[_memberAddress].totalRewards += _amount;
        emit RewardsEarned(_memberAddress, _amount);
    }

    function redeemRewards(uint _amount) external onlyMember {
        require(members[msg.sender].totalRewards >= _amount,"MInsufficient rewards");
        members[msg.sender].totalRewards += _amount;
        emit RewardsReedemed(msg.sender, _amount);
    }

}