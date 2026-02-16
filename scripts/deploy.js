const hre = require("hardhat");
async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying with:", deployer.address);

  const PersonalLocker = await hre.ethers.getContractFactory("PersonalLocker");
  const contract = await PersonalLocker.deploy("Iniyan Ramesh Sathya Sundari", "mySecret123");

  await contract.waitForDeployment();

  console.log("Contract deployed at:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});