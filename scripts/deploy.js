require("dotenv").config();
const hre = require("hardhat");
const fs = require("fs");

async function main() {
    const PersonalLocker = await hre.ethers.getContractFactory("PersonalLocker");

    const initialMessage = "Jaidev Karthikeyan";
    const secretPassword = process.env.SECRET_PASSWORD;

    console.log("......................................");
    console.log("Initial Message before Deployment ....", initialMessage);
    console.log("......................................");

    // Deploy contract
    const locker = await PersonalLocker.deploy(initialMessage, secretPassword);
    await locker.waitForDeployment();

    console.log("......................................");
    console.log("✅ Contract deployed at:", locker.target);
    console.log("......................................");

    // Save the deployed address to JSON
    const data = { address: locker.target };
    fs.writeFileSync("deployedAddress.json", JSON.stringify(data, null, 2));
    console.log("📄 Address saved to deployedAddress.json");

    // Read and display the initial message
    const storedMessage = await locker.block_contr(); // or locker.readMessage()

    console.log(".............................. .......");
    console.log("📄 Initial message stored in contract:", storedMessage);
    console.log(".............................. .......");


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
