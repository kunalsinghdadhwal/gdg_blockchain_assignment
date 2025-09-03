require("dotenv").config();
const hre = require("hardhat");
const fs = require("fs");

async function main() {
    // Get signer (needed even for view functions)
    const [signer] = await hre.ethers.getSigners();

    // Read the deployed contract address from JSON
    const data = JSON.parse(fs.readFileSync("deployedAddress.json"));
    const contractAddress = data.address;

    // Attach to the deployed contract
    const locker = await hre.ethers.getContractAt("PersonalLocker", contractAddress, signer);

    // Read current message
    const currentMessage = await locker.block_contr(); // or locker.readMessage()
    console.log("📄 Current message in contract:", currentMessage);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
