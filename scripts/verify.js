const hre = require("hardhat");

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  if (!contractAddress) {
    console.error("Please set CONTRACT_ADDRESS environment variable");
    process.exit(1);
  }
  
  console.log("Verifying PersonalLocker contract...");
  console.log("Contract address:", contractAddress);
  
  const PersonalLocker = await hre.ethers.getContractFactory("PersonalLocker");
  const personalLocker = PersonalLocker.attach(contractAddress);
  
  try {
    const message = await personalLocker.getMessage();
    const owner = await personalLocker.owner();
    const blockContr = await personalLocker.block_contr();
    
    console.log("Current message:", message);
    console.log("Owner:", owner);
    console.log("Block number at deployment:", blockContr.toString());
    
    const [signer] = await hre.ethers.getSigners();
    if (signer.address === owner) {
      const password = await personalLocker.getPassword();
      console.log("Password (owner only):", password);
    } else {
      console.log("Not owner, cannot access password");
    }
    
  } catch (error) {
    console.error("Error reading contract:", error.message);
  }
}

main()
  .then(() => {
    console.log("Verification completed!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Verification failed:", error);
    process.exit(1);
  });
