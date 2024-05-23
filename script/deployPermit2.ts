import { ethers } from "hardhat";

const chainId = 22040;

async function main() {
    const artifact = require("../out/Permit2.sol/Permit2.json");

    const [deployer] = await ethers.getSigners();
    console.log("Deploying Permit2 with the account:", deployer.address);

    const Permit2 = await ethers.getContractFactory(artifact.abi, artifact.bytecode, deployer);
    const permit2 = await Permit2.deploy(chainId);
    const result = await permit2.waitForDeployment();
    console.log("Permit2 deployed to:", await permit2.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
