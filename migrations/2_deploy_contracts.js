const PerSec = artifacts.require("PerSec");

module.exports = function(deployer) {
  deployer.deploy(PerSec);
};
