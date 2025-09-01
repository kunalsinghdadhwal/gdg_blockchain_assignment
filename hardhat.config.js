require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { SEPOLIA_RPC_URL, PRIVATE_KEY } = process.env;

if (!SEPOLIA_RPC_URL || !PRIVATE_KEY) {
  throw new Error("Please set SEPOLIA_RPC_URL and PRIVATE_KEY in .env file");
}

module.exports = {
  solidity: {
    version: "0.8.28",
  },
  networks: {
    localhost: { 
      url: "http://127.0.0.1:8545" 
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY], 
    },
  },
};