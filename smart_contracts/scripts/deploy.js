// deploy.js - Polygon CDK chain deployment script (simulated setup)

const hre = require("hardhat");

async function main() {
    // Fetch the signer (deployer) - assumed to be funded on the Polygon CDK chain's testnet
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Load the smart contract factory for Transactions
    const Transactions = await hre.ethers.getContractFactory("Transactions");

    // Deploying Transactions contract on a Polygon CDK chain (configured via hardhat.config.js)
    const transactions = await Transactions.deploy();
    await transactions.deployed();

    // Output the deployed contract address on the Polygon CDK chain
    console.log("Transactions contract deployed to:", transactions.address);

    // Future note: Consider verifying the contract on the Polygon CDK block explorer once APIs are integrated
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        // Error handling during deployment on the CDK chain
        console.error(error);
        process.exit(1);
    });
