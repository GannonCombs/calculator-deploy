/**
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";

var HDWalletProvider = require("truffle-hdwallet-provider");
require("dotenv").config();

const fs = require('fs');
const mnemonic = process.env.MNEMONIC;
const token = process.env.TOKEN;
//const token = fs.readFileSync(".token").toString().trim();//var mnemonic = "onions carrots beans ...";

module.exports = {

  networks: {
    // Configuration for mainnet
    mainnet: {
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${token}`)
      },
      network_id: "1"
    },
    //Configuration for ropsten network
    ropsten: {
      // Special function to setup the provider
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${token}`)
      },
      // Network id is 4 for Rinkeby
      network_id: 3
    },
    // Configuration for rinkeby network
    rinkeby: {
      // Special function to setup the provider
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${token}`)
      },
      // Network id is 4 for Rinkeby
      network_id: 4
    }
  },
    

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.5.0"
    }
  },

  db: {
    enabled: false
  }
};
