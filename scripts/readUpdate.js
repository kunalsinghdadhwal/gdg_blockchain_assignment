const { ethers, network } = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = network.name === 'sepolia' 
    ? process.env.SEPOLIA_CONTRACT_ADDRESS
    : process.env.LOCAL_CONTRACT_ADDRESS;

  const lockerPassword = process.env.LOCKER_PASSWORD;
  
  if (!contractAddress || !lockerPassword) {
    throw new Error(`Please set ${network.name.toUpperCase()}_CONTRACT_ADDRESS and LOCKER_PASSWORD in .env file`);
  }

  const locker = await ethers.getContractAt("Locker", contractAddress);

  console.log("=== CURRENT CONTRACT STATE ===");
  const currentMessage = await locker.readMessage();
  console.log("📖 Stored Message:", currentMessage);
  
  const deployedBlock = await locker.block_contr();
  console.log("🔗 Deployed at block:", deployedBlock.toString());
  
  const owner = await locker.owner();
  console.log("👤 Owner Address:", owner);
  console.log("==============================");

  console.log("\n🔄 Updating message to: Assignment Completed by Tanishq Goyal 24BCE1615");
  
  const tx = await locker.updateMessage("Assignment Completed by Tanishq Goyal 24BCE1615", lockerPassword);
  console.log("📤 Transaction sent:", tx.hash);
  
  await tx.wait();
  console.log("✅ Message updated successfully!");

  console.log("\n=== VERIFYING UPDATE ===");
  const updatedMessage = await locker.readMessage();
  console.log("📖 Updated Message:", updatedMessage);
  console.log("=========================");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });