truffle-config.js

var HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "neck certain ribbon arrest parent there accident width pulse blouse sure diary"
";
module.exports = {
 networks: {
  // development: {
  //  host: "127.0.0.1",
  //  port: 7545,
  //  network_id: "*"
  // },
  ropsten: {
   provider: function() {
    return new HDWalletProvider(mnemonic,"https://ropsten.infura.io/v3/8ea294309f6b48af9e42c6089f52de48");
   },
   network_id: 3,
   gas: 4500000,
   gasPrice: 10000000000,
  }
 },
 compilers: {
    solc: {
      version: "0.5.6",       
    }
  }
};