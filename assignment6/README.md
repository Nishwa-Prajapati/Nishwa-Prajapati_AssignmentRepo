# This my assignment 6

>Assignmnet 6 : **IU2141230218_Nishwa Prajapati**

Submitting Date: 11/10/2024

# Instructions
Step 1 : Clone the repository

git clone  https://github.com/Nishwa-Prajapati/Nishwa-Prajapati_AssignmentRepo/tree/df9f4cf99d64ebd7b815422bdd29fbfb42f2e2a8/assignment6

>## AssetsTransfer Smart Contract:

The AssetsTransfer contract allows users to create and transfer ownership of assets on the Ethereum blockchain. Each asset is uniquely identified and linked to an owner, with the ability to transfer ownership between users securely.

### Key Features

**Asset Creation:** Users can create assets by specifying a name and value. The creator of the asset is automatically assigned as the asset's owner.

**Asset Ownership:** The contract tracks the ownership of assets and allows the transfer of assets from one user to another.


**Events:**

**AssetCreated:**  Triggered when a new asset is created.

**AssetTransferred:**  Triggered when an asset is transferred from one owner to another.

### Functions

**createAsset(string memory _name, uint256 _value):**

Creates a new asset with a given name and value.
The caller becomes the owner of the asset.
Emits an AssetCreated event.

**getAsset(uint256 _assetId):**

Retrieves the asset's details such as name, value, and current owner.

**transferAssets(uint256 _assetId, address _to):**

Allows the current owner of the asset to transfer ownership to another address.
Emits an AssetTransferred event.

### Modifiers

**onlyOwner(uint256 _assetId):**
Restricts certain functions to only be called by the owner of a specific asset.

### Contract Owner

The contract deployer is set as the owner of the contract.


>## FitnessClubRewards Smart Contract

The FitnessClubRewards contract allows a fitness club to manage reward points for its members. It provides functionality for the club owner to add members, assign rewards, and for members to redeem their accumulated rewards.

### Key Features

**Membership Management:** The owner can add and remove members.
**Rewards System:**
The owner can assign rewards to members.
Members can check and redeem their rewards.

### Functions

**addMember(address _member):** 

Adds a new member (owner-only).

**deleteMember(address _member):**

Removes an existing member (owner-only).

**assignRewards(uint _amount, address _memberAddress):**

Assigns reward points to a member (owner-only).

**redeemRewards(uint _amount):**
Allows members to redeem their reward points.
