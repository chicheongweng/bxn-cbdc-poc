const Web3 = require('web3');
require('dotenv').config();

const network = process.env.NETWORK; // 'sepolia', 'polygon_cardona1', 'polygon_cardona2'

let rpcUrl, address;

switch (network) {
  case 'sepolia':
    rpcUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;
    address = process.env.SEPOLIA_ADDRESS;
    break;
  case 'polygon_amoy1':
    rpcUrl = process.env.POLYGON_AMOY_1_RPC_URL;
    address = process.env.POLYGON_AMOY_1_ADDRESS;
    break;
  case 'polygon_amoy2':
    rpcUrl = process.env.POLYGON_AMOY_2_RPC_URL;
    address = process.env.POLYGON_AMOY_2_ADDRESS;
    break;
  case 'polygon_cardona1':
    rpcUrl = process.env.POLYGON_CARDONA_1_RPC_URL;
    address = process.env.POLYGON_CARDONA_1_ADDRESS;
    break;
  case 'polygon_cardona2':
    rpcUrl = process.env.POLYGON_CARDONA_2_RPC_URL;
    address = process.env.POLYGON_CARDONA_2_ADDRESS;
    break;
  default:
    throw new Error('Unknown network');
}

const web3 = new Web3(rpcUrl);

web3.eth.getBalance(address, (err, balance) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);
  }
});