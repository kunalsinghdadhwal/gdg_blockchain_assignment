const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = hre.network.name === 'sepolia' 
    ? process.env.SEPOLIA_CONTRACT_ADDRESS
    : process.env.LOCAL_CONTRACT_ADDRESS;

  const lockerPassword = process.env.LOCKER_PASSWORD;

  if (!contractAddress) {
    throw new Error(`Please set ${hre.network.name.toUpperCase()}_CONTRACT_ADDRESS in .env file`);
  }

  if (!lockerPassword) {
    throw new Error("Please set LOCKER_PASSWORD in .env file");
  }

  console.log("🔗 Updating contract at:", contractAddress);

  const PersonalLocker = await hre.ethers.getContractFactory("PersonalLocker");
  const locker = await PersonalLocker.attach(contractAddress);

  // Step 1: Read old message
  const oldMessage = await locker.readMessage();
  console.log("📖 Current Message:", oldMessage);

  // Step 2: Define new message
  const newMessage = "Assignment Completed";

  // Step 3: Listen for event once
  locker.once("MessageUpdated", (oldMsg, newMsg, by) => {
    console.log(`📢 Event caught → Old: "${oldMsg}", New: "${newMsg}", Updated Message: ${by}`);
  });

  // Step 4: Send update transaction
  const tx = await locker.updateMessage(newMessage, lockerPassword);
  console.log("⏳ Transaction sent:", tx.hash);

  // Step 5: Wait for confirmation
  await tx.wait();

  // Step 6: Read new message
  const updatedMessage = await locker.readMessage();
  console.log(`✅ Message updated! Old: "${oldMessage}" → New: "${updatedMessage}"`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
