const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const contractAddress = "<DEPLOYED_CONTRACT_ADDRESS>"; // replace after deploy
  const PersonalLocker = await hre.ethers.getContractFactory("PersonalLocker");
  const contract = await PersonalLocker.attach(contractAddress);

  const tx = await contract.updateMessage("Assignment Completed", "mySecret123");
  await tx.wait();

  console.log("Message updated:", await contract.readMessage());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
