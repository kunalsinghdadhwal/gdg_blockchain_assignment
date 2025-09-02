require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const ProtectedMessage = await hre.ethers.getContractFactory(
    "ProtectedMessage"
  );
  const contract = ProtectedMessage.attach(contractAddress);

  const current = await contract.readMessage();
  console.log("Current Message:", current);

  console.log(" Updating message...");
  const tx = await contract.updateMessage(
    "New Updated Message",
    process.env.SECRET
  );
  await tx.wait();

  const updated = await contract.readMessage();
  console.log("Updated Message:", updated);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
