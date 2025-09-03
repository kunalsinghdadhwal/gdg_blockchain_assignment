const hre = require("hardhat");

async function main() {
  // Replace with your contract address and password
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Default localhost address
  const password = "mySecretPassword123"; // Your secret password
  
  console.log("Updating message in PersonalLocker contract...");
  
  const PersonalLocker = await hre.ethers.getContractFactory("PersonalLocker");
  const personalLocker = await PersonalLocker.attach(contractAddress);
  
  // Update the message
  const tx = await personalLocker.updateMessage("Assignment Completed", password);
  await tx.wait();
  
  console.log("Message updated successfully!");
  console.log("Transaction hash:", tx.hash);
  
  // Verify the updated message
  const currentMessage = await personalLocker.getMessage();
  console.log("New message in contract:", currentMessage);
}

module.exports = main;