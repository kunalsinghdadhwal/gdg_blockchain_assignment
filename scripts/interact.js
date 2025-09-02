const hre = require("hardhat");

async function main() {
  const contractAddress = ""; 
  const Message = await hre.ethers.getContractFactory("Message");
  const message = await Message.attach(contractAddress);

  // Read current message
  console.log("Current message:", await message.readMessage());

  // Update message
  const tx = await message.updateMessage("Updated via script!");
  await tx.wait();

  // Read again
  console.log("New message:", await message.readMessage());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
