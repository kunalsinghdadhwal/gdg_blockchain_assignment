require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const ProtectedMessage = await ethers.getContractFactory("ProtectedMessage");

  const contract = await ProtectedMessage.deploy("Intial Message", "secret123");

  await contract.waitForDeployment();

  console.log("ProtectedMessage deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
