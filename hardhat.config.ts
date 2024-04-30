import { HardhatUserConfig } from "hardhat/config";
import { ethers } from "ethers";
import * as dotenv from "dotenv";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        url: "https://network.ambrosus.io",
      },
    },
    local: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "0x80f702eb861f36fe8fbbe1a7ccceb04ef7ddef714604010501a5f67c8065d446",
      ],
      hardfork: "byzantium",
    },
    dev: {
      url: "https://network.ambrosus-dev.io",
      hardfork: "byzantium",
      gasPrice: 0,
      accounts: [
        process.env.PRIVATEKEY_OWNER_AMB || ethers.ZeroHash,
      ],
    },
    test: {
      url: "https://network.ambrosus-test.io",
      hardfork: "byzantium",
      accounts: [
        process.env.PRIVATEKEY_OWNER_AMB || ethers.ZeroHash,
      ],
    },
    main: {
      url: "https://network.ambrosus.io",
      hardfork: "byzantium",
      gasPrice: 0,
      accounts: [process.env.PRIVATEKEY_OWNER_AMB_PROD || ethers.ZeroHash],
    }
  }
};

export default config;
