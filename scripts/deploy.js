const hre = require("hardhat");

async function main() {
  const initialMessage = "Utsav Gautam";
  const secretPassword = "GDG2024SecretPassword";
  
  console.log("Deploying PersonalLocker contract...");
  console.log("Initial message:", initialMessage);
  console.log("Secret password:", secretPassword);
  
  const PersonalLocker = await hre.ethers.getContractFactory("PersonalLocker");
  const personalLocker = await PersonalLocker.deploy(initialMessage, secretPassword);
  
  await personalLocker.waitForDeployment();
  
  const address = await personalLocker.getAddress();
  console.log("PersonalLocker deployed to:", address);
  console.log("Transaction hash:", personalLocker.deploymentTransaction().hash);
  
  const deployedMessage = await personalLocker.getMessage();
  const deployedPassword = await personalLocker.getPassword();
  const owner = await personalLocker.owner();
  const blockContr = await personalLocker.block_contr();
  
  console.log("Deployed message:", deployedMessage);
  console.log("Deployed password:", deployedPassword);
  console.log("Owner:", owner);
  console.log("Block number at deployment:", blockContr.toString());
  
  return { personalLocker, address, secretPassword };
}

main()
  .then((result) => {
    console.log("Deployment completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
