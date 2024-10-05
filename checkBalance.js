const Web3 = require('web3');
require('dotenv').config();

const infuraKey = process.env.INFURA_PROJECT_ID;
const web3 = new Web3(`https://sepolia.infura.io/v3/${infuraKey}`);

const address = process.env.SEPOLIA_ADDRESS;


web3.eth.getBalance(address, (err, balance) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);
  }
});
