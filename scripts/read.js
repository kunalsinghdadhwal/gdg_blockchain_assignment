const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = hre.network.name === 'sepolia' 
    ? process.env.SEPOLIA_CONTRACT_ADDRESS
    : process.env.LOCAL_CONTRACT_ADDRESS;

  if (!contractAddress) {
    throw new Error(`Please set ${hre.network.name.toUpperCase()}_CONTRACT_ADDRESS in .env file`);
  }

  console.log("🔗 Reading contract at:", contractAddress);

  // Use the correct contract name
  const PersonalLocker = await hre.ethers.getContractFactory("PersonalLocker");
  const locker = await PersonalLocker.attach(contractAddress);

  // Call readMessage()
  const message = await locker.readMessage();
  console.log("📖 Current Secret Message:", message);

  // Also log block number (extra check)
  const blockContr = await locker.block_contr();
  console.log("⛓️ Block number at deployment:", blockContr.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
