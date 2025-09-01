const hh = require("hardhat");

async function main() {
  const Lock = await hh.ethers.getContractFactory("Lock");

  // Deploy with constructor arguments
  const lock = await Lock.deploy("Anish Gupta", "Password123");

  // Wait for deployment to complete
  await lock.waitForDeployment();

  const address = await lock.getAddress();
  console.log("Lock deployed to:", address);
  console.log("Initial message:", await lock.readMsg());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
