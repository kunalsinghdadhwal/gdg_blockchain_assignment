// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
  const ProtectedMessage = await ethers.getContractFactory("ProtectedMessage");

  // Deploy with constructor arguments
  const contract = await ProtectedMessage.deploy(
    "Hello Hardhat!", // initial message
    "secret123" // password
  );

  // Wait until the contract is actually deployed on-chain
  await contract.waitForDeployment();

  console.log("ProtectedMessage deployed to:", await contract.getAddress());
}

// Run script with error handling
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
