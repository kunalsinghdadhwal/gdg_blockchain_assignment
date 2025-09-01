const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const initialMessage = "Mohammed Mubashir Hasan";
  const secretPassword =process.env.SECRET_PASSWORD ; 

  console.log("Deploying PersonalLocker contract...");

  const personalLocker = await hre.ethers.deployContract("PersonalLocker", [
    initialMessage,
    secretPassword,
  ]);

  await personalLocker.waitForDeployment();

  console.log(`PersonalLocker deployed to: ${personalLocker.target}`);
  console.log(`Initial message: "${initialMessage}"`);
  console.log("Deployment details logged. Keep the contract address and your password secure.")
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
