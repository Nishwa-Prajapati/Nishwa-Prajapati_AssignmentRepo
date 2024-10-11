// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AssetsTransfer {

    address public owner;

    constructor()
    {
        owner = msg.sender;
    }

    struct Asset {
        string name;
        uint256 value;
        address owner;
    }

    mapping(uint256 => Asset) public assets;
    uint256 public assetCount;

    //Events
    event AssetCreated(uint256 assetsId, string name, uint256 value, address indexed owner);
    event AssetTransferred(uint256 assetId, address indexed from, address indexed to);

    modifier onlyOwner(uint256 _assetId)
    {
        require(msg.sender == owner,"You are not authorized");
        _;
    }

    function getAsset(uint256 _assetId) public view returns (string memory, uint256, address)
    {
        Asset memory asset = assets[_assetId];
        return (asset.name,asset.value,asset.owner);
    }

    function createAsset(string memory _name,uint256 _value) public 
    {
        assetCount++;
        assets[assetCount] = Asset(_name, _value,msg.sender);
        emit AssetCreated(assetCount,_name,_value,msg.sender);
    }

    function transferAssets(uint256 _assetId, address _to) public onlyOwner(_assetId)
    {
        require(_to != address(0),"Invalid Address");
        require(assets[_assetId].owner != _to,"Asset is already owner by you");

        address prevOwn = assets[_assetId].owner;
        assets[_assetId].owner = _to;

        emit AssetTransferred(_assetId,prevOwn, _to);

    }

}