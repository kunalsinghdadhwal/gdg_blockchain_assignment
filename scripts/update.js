const hre = require("hardhat");
require("dotenv").config();


//0x5FbDB2315678afecb367f032d93F642f64180aa3 hardhat one
async function main() {
  const contractAddress = "0xe4419bfaf5981978b5B2ecf50A3235130619F106"; // Deployed contract address
  const secretPassword = process.env.SECRET_PASSWORD; // The same password from deployment
  const newMessage = "Assignment Completed";

  console.log(`Connecting to PersonalLocker at address: ${contractAddress}`);

  const personalLocker = await hre.ethers.getContractAt("PersonalLocker", contractAddress);

  console.log("Current message:", await personalLocker.getMessage());
  console.log("Updating message...");

  const tx = await personalLocker.updateMessage(secretPassword, newMessage);
  await tx.wait();

  console.log("Message updated successfully!");
  console.log("New message:", await personalLocker.getMessage());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
