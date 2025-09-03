// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
  t
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  
  const PersonalLocker = await ethers.getContractFactory("PersonalLocker");

 
  const personalLocker = await PersonalLocker.deploy(
    "Anmol Saluja",      
  );

  
  await personalLocker.deployed();

 
  console.log("PersonalLocker deployed to:", personalLocker.address);
  console.log("Deployment transaction hash:", personalLocker.deployTransaction.hash);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
