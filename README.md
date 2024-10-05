# BXN CBDC PoC

This project is a proof of concept (PoC) for a Central Bank Digital Currency (CBDC) using Ethereum smart contracts. It includes scripts to deploy and interact with the CBDC token on the Sepolia testnet.

## Prerequisites

- Node.js (v20.17.0 or later)
- npm (Node Package Manager)
- MetaMask wallet
- Infura account

## Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/bxn-cbdc-poc.git
   cd bxn-cbdc-poc
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Create a .env file: Create a .env file in the root of the project and add your Infura Project ID and MetaMask mnemonic**:
   ```sh
   INFURA_PROJECT_ID=your_infura_project_id
   MNEMONIC=your_metamask_mnemonic
   SEPOLIA_ADDRESS=your_sepolia_address
   ```

4. **Compile the contracts**:
   ```sh
   truffle compile
   ```

5. **Deploy the contracts to Sepolia**:
   ```sh
   truffle migrate --network sepolia
   ```

6. **Check Balance***:
   ```sh
   node checkBalance.js
   ```