require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const contractAddress = "0x81BE25bdFaAA03776FfF149a92b6B1E8c663e832";

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
