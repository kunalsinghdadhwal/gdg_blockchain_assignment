const hre = require("hardhat");

async function main() {
  const contractAddress = "0x1245603ca4D43010523d2b0fD47ea54AaD60a6aB"; 
  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = Lock.attach(contractAddress);

  console.log("Current message:", await lock.readMsg());

  const tx = await lock.updateMessage("Assignment Completed", "Password123");
  await tx.wait();

  console.log("Message updated!");
  console.log("New message:", await lock.readMsg());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
