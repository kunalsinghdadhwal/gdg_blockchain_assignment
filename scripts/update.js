const hre = require("hardhat");

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  if (!contractAddress) {
    console.error("Please set CONTRACT_ADDRESS environment variable");
    process.exit(1);
  }
  
  const secretPassword = "GDG2024SecretPassword";
  const newMessage = "Assignment Completed";
  
  console.log("Updating PersonalLocker contract...");
  console.log("Contract address:", contractAddress);
  console.log("New message:", newMessage);
  console.log("Using password:", secretPassword);
  
  const PersonalLocker = await hre.ethers.getContractFactory("PersonalLocker");
  const personalLocker = PersonalLocker.attach(contractAddress);
  
  const currentMessage = await personalLocker.getMessage();
  console.log("Current message:", currentMessage);
  
  console.log("Updating message...");
  const updateTx = await personalLocker.updateMessage(newMessage, secretPassword);
  await updateTx.wait();
  
  console.log("Message updated successfully!");
  console.log("Transaction hash:", updateTx.hash);
  
  const updatedMessage = await personalLocker.getMessage();
  console.log("Updated message:", updatedMessage);
  
  const owner = await personalLocker.owner();
  const blockContr = await personalLocker.block_contr();
  
  console.log("Owner:", owner);
  console.log("Block number at deployment:", blockContr.toString());
}

main()
  .then(() => {
    console.log("Update completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Update failed:", error);
    process.exit(1);
  });
