const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  const PersonalLocker = await hre.ethers.getContractFactory("PersonalLocker");
  const locker = await PersonalLocker.deploy("GDG Blockchain", "blockchain123");
  await locker.waitForDeployment();

  const address = await locker.getAddress();
  console.log("PersonalLocker deployed at:", address);

  console.log("Transaction Hash:", locker.deploymentTransaction().hash);

  const filePath = "./deployed.json";
  let deployedData = {};

  if (fs.existsSync(filePath)) {
    deployedData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }

  deployedData[hre.network.name] = { PersonalLocker: address };

  fs.writeFileSync(filePath, JSON.stringify(deployedData, null, 2));
  console.log(`Saved deployment info for network: ${hre.network.name}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
