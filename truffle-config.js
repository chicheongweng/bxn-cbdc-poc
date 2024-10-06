require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const infuraKey = process.env.INFURA_PROJECT_ID;
const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraKey}`),
      network_id: 5,       // Goerli's id
      gas: 5500000,        // Goerli has a higher block limit than mainnet
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`),
      network_id: 11155111, // Sepolia's id
      gas: 5500000,         // Sepolia has a higher block limit than mainnet
      confirmations: 2,     // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,   // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true      // Skip dry run before migrations? (default: false for public nets )
    },
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, `https://polygon-mumbai.infura.io/v3/${infuraKey}`),
      network_id: 80001, // Mumbai's id
      gas: 5500000,         // Mumbai has a higher block limit than mainnet
      confirmations: 2,     // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,   // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true      // Skip dry run before migrations? (default: false for public nets )
    },
    polygon_zkevm: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc.public.zkevm-test.net`),
      network_id: 1442, // Polygon zkEVM testnet's id
      gas: 5500000,         // Polygon zkEVM testnet has a higher block limit than mainnet
      confirmations: 2,     // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,   // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true      // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
      version: "0.8.20",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
