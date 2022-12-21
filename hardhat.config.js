require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      accounts: [process.env.PRIVATE_KEY],
      url: process.env.GOERLI_RPC_URL,
      blockGasLimit: 10000000000000,
    },
  },
}
