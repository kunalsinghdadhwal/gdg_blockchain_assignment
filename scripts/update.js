const hre = require("hardhat");

async function main() {
  // ✅ YOU WILL CHANGE THE ADDRESS LATER
  const contractAddress = "0x162FD1c0b2a8d3A1009A3A58fdea0Bd8E50f9fB2";
  
  
  const yourPassword = "18003999GDG";

  const newMessage = "Assignment Completed";

  console.log(`Connecting to contract at: ${contractAddress}`);

  const personalLocker = await hre.ethers.getContractAt("PersonalLocker", contractAddress);

  const oldMessage = await personalLocker.getMessage();
  console.log(`The old message is: "${oldMessage}"`);

  console.log(`Updating message to: "${newMessage}"...`);
  const tx = await personalLocker.updateMessage(newMessage, yourPassword);
  
  await tx.wait();

  const updatedMessage = await personalLocker.getMessage();
  console.log(`Update transaction successful! Transaction hash: ${tx.hash}`);
  console.log(`The new message is: "${updatedMessage}"`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
