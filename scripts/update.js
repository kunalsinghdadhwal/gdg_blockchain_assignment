require("dotenv").config();
const hre = require("hardhat");
const fs = require("fs");

async function main() {
    const [signer] = await hre.ethers.getSigners();

    // Read the deployed contract address
    const data = JSON.parse(fs.readFileSync("deployedAddress.json"));
    const contractAddress = data.address;

    // Attach contract with signer
    const locker = await hre.ethers.getContractAt("PersonalLocker", contractAddress, signer);

    const secretPassword = process.env.SECRET_PASSWORD;

    // Update the message
    const tx = await locker.updateMessage("Assignment Completed", secretPassword);
    const receipt = await tx.wait();
    console.log("Status:", receipt.status); 
    console.log("✅ Message updated");

    // Read updated message using public variable getter
    const updatedMessage = await locker.block_contr();
    console.log("📄 Updated message:", updatedMessage);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

