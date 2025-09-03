const hre = require("hardhat");

async function main() {
  // Replace with your full name and secret password
  const initialMessage = "John Doe"; // Your full name
  const secretPassword = "mySecretPassword123"; // Your secret password
  
  console.log("Deploying PersonalLocker contract...");
  console.log(`Initial message: ${initialMessage}`);
  
  const PersonalLocker = await hre.ethers.getContractFactory("PersonalLocker");
  const personalLocker = await PersonalLocker.deploy(initialMessage, secretPassword);
  
  await personalLocker.deployed();
  
  console.log("PersonalLocker deployed to:", personalLocker.address);
  console.log("Transaction hash:", personalLocker.deployTransaction.hash);
  
  // Verify the initial message
  const currentMessage = await personalLocker.getMessage();
  console.log("Current message in contract:", currentMessage);
  
  return { personalLocker, secretPassword };
}

module.exports = main;