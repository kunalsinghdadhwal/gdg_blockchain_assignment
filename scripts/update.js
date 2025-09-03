const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const filePath = "./deployed.json";
  if (!fs.existsSync(filePath)) {
    throw new Error("No deployed.json found. Deploy contract first.");
  }

  const deployedData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const network = hre.network.name;

  if (!deployedData[network] || !deployedData[network].PersonalLocker) {
    throw new Error(`No deployment found for network: ${network}`);
  }

  const contractAddress = deployedData[network].PersonalLocker;

  const artifact = await hre.artifacts.readArtifact("PersonalLocker");

  const locker = new hre.ethers.Contract(contractAddress, artifact.abi, deployer);

  const tx = await locker.updateMessage("Assignment Completed", "blockchain123");
  await tx.wait();

  console.log("Update Transaction Hash:", tx.hash);

  const updatedMessage = await locker.readMessage();
  console.log("Message updated to:", updatedMessage);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
