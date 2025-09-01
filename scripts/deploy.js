const hre = require("hardhat");
require("dotenv").config();
const fs = require("fs");

async function main() {
  const lockerPassword = process.env.LOCKER_PASSWORD;

  if (!lockerPassword) {
    throw new Error("Please set LOCKER_PASSWORD in .env file");
  }

  console.log(`📦 Deploying contract to ${hre.network.name} with password from .env...`);

  // Compile and deploy
  const Locker = await hre.ethers.getContractFactory("PersonalLocker");
  const locker = await Locker.deploy("Tanishq Goyal", lockerPassword);
  await locker.waitForDeployment();

  const address = await locker.getAddress();
  console.log(`✅ Deployed to: ${address}`);

  // 🔑 Choose correct key based on network
  const key =
    hre.network.name === "sepolia"
      ? "SEPOLIA_CONTRACT_ADDRESS"
      : "LOCAL_CONTRACT_ADDRESS";

  // 🔄 Update .env file
  let envContent = fs.readFileSync(".env", "utf-8");

  if (envContent.includes(key)) {
    // Replace existing line
    envContent = envContent.replace(
      new RegExp(`${key}=.*`, "g"),
      `${key}=${address}`
    );
  } else {
    // Add new line
    envContent += `\n${key}=${address}`;
  }

  fs.writeFileSync(".env", envContent);
  console.log(`📝 Updated .env with ${key}=${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/* const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const lockerPassword = process.env.LOCKER_PASSWORD;

  if (!lockerPassword) {
    throw new Error("Please set LOCKER_PASSWORD in .env file");
  }

  console.log("Deploying contract with password from .env...");

  // Use the actual contract name from PersonalLocker.sol
  const Locker = await hre.ethers.getContractFactory("PersonalLocker");
  const locker = await Locker.deploy("Tanishq Goyal", lockerPassword);

  await locker.waitForDeployment();

  console.log(`PersonalLocker deployed to: ${await locker.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); */