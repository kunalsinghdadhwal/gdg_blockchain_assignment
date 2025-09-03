const hre = require("hardhat");

async function main() {
  
  const initialMessage = "Naveen Kasi"; // e.g., "Ravi Kumar"
  const secretPassword = "18003999GDG"; 

  console.log("Deploying PersonalLocker contract...");

  const locker = await hre.ethers.deployContract("PersonalLocker", [
    initialMessage,
    secretPassword,
  ]);

  await locker.waitForDeployment();

  console.log(`PersonalLocker deployed successfully!`);
  console.log(`Contract address: ${locker.target}`);
  console.log(`Initial message: "${initialMessage}"`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});