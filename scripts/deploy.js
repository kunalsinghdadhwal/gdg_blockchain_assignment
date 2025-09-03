const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const PersonalLocker = await ethers.getContractFactory("PersonalLocker");

  console.log("Deploying contract...");

  const personalLocker = await PersonalLocker.deploy(
    process.env.INITIAL_MESSAGE,
    process.env.SECRET_PASSWORD
  );

  await personalLocker.waitForDeployment();

  console.log("PersonalLocker deployed to:", personalLocker.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});