const CBDCToken = artifacts.require("CBDCToken");

module.exports = function (deployer) {
  deployer.deploy(CBDCToken);
};

