require("dotenv").config();
const { ethers, network } = require("hardhat");

async function main() {
    const contractAddress = network.name === 'sepolia' 
        ? process.env.SEPOLIA_CONTRACT_ADDRESS
        : process.env.LOCAL_CONTRACT_ADDRESS;

    const lockerPassword = process.env.LOCKER_PASSWORD;

    if (!contractAddress) {
        console.error(`Please set ${network.name.toUpperCase()}_CONTRACT_ADDRESS in your .env file.`);
        return;
    }

    if (!lockerPassword) {
        console.log("No password found in .env, cannot update message.");
        return;
    }

    console.log("Updating message to: Assignment Completed by Tanishq Goyal 24BCE1615");
    
    const locker = await ethers.getContractAt("Locker", contractAddress);

    // Read current message first
    const currentMessage = await locker.readMessage();
    console.log("Current message:", currentMessage);

    try {
        // Update the message
        const tx = await locker.updateMessage("Assignment Completed by Tanishq Goyal 24BCE1615", lockerPassword);
        console.log("Transaction sent:", tx.hash);
        
        await tx.wait();
        console.log("Message updated successfully!");

        // Verify the update
        const updatedMessage = await locker.readMessage();
        console.log("Updated message:", updatedMessage);
        
    } catch (error) {
        console.error("Failed to update message:", error.reason || error.message);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });