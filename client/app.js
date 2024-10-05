const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Read the CBDCToken.json file
const contractJsonPath = path.resolve(__dirname, '../build/contracts/CBDCToken.json');
const contractJson = JSON.parse(fs.readFileSync(contractJsonPath, 'utf8'));

// Extract the ABI and contract address
const abi = contractJson.abi;
const contractAddress = contractJson.networks['5'].address; // Goerli network ID


const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
const cbdcToken = new web3.eth.Contract(abi, contractAddress);

document.getElementById('mintButton').onclick = async () => {
    const accounts = await web3.eth.getAccounts();
    await cbdcToken.methods.mint(accounts[0], web3.utils.toWei('100')).send({ from: accounts[0] });
    alert('Minted 100 CBDC Tokens');
};

document.getElementById('transferButton').onclick = async () => {
    const accounts = await web3.eth.getAccounts();
    await cbdcToken.methods.transfer('RECIPIENT_ADDRESS', web3.utils.toWei('10')).send({ from: accounts[0] });
    alert('Transferred 10 CBDC Tokens');
};

document.getElementById('balanceButton').onclick = async () => {
    const accounts = await web3.eth.getAccounts();
    const balance = await cbdcToken.methods.balanceOf(accounts[0]).call();
    alert(`Balance: ${web3.utils.fromWei(balance)} CBDC Tokens`);
};
