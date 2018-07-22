var Cheques = artifacts.require("./Cheques.sol")

module.exports = function(deployer) {
  deployer.deploy(Cheques);
};
