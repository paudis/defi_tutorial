// Migration contract migrates one contracts to another
// Changes the state of the blockchain
// Migration just like in a database


const MyTokenFarm = artifacts.require("MyTokenFarm");

module.exports = function(deployer) {
  deployer.deploy(MyTokenFarm)
};
