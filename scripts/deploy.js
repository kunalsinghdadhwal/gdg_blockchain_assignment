// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
  // Get the deployer account from Hardhat
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Compile and prepare the PersonalLocker contract factory
  const PersonalLocker = await ethers.getContractFactory("PersonalLocker");

  // Deploy: pass your full name and your chosen secret password
  const personalLocker = await PersonalLocker.deploy(
    "Anmol Saluja",      
  );

  // Wait for deployment to finish
  await personalLocker.deployed();

  // Log the on-chain contract address and the transaction hash
  console.log("PersonalLocker deployed to:", personalLocker.address);
  console.log("Deployment transaction hash:", personalLocker.deployTransaction.hash);
}

// Standard pattern to run async main and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
