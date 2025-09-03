const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const CONTRACT_ADDRESS = "0x3467d88c6ADa2FfD00d6350dAAF31d38aCa461D3"; 
  const PASSWORD = process.env.SECRET_PASSWORD;

  // 1. Get provider for Sepolia
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

  // 2. Load signer (your wallet) with private key
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  // 3. Load contract ABI & connect to deployed address
  const PersonalLocker = await ethers.getContractFactory("PersonalLocker", signer);
  const personalLocker = PersonalLocker.attach(CONTRACT_ADDRESS);

  console.log("Updating message...");
  const tx = await personalLocker.updateMessage("Assignment Completed", PASSWORD);
  await tx.wait();

  console.log("Message updated! Tx hash:", tx.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});