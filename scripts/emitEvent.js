const { ethers } = require('hardhat')
const {
  contractAbi,
  contractAddress,
  proxyContractAbi,
  proxyContractAddress,
} = require('../constants')

async function main() {
  const signer = await ethers.getSigner()

  const proxy = await ethers.getContractAt(
    proxyContractAbi,
    proxyContractAddress,
    signer
  )

  await proxy.forward()
  // await transactionResponse.wait()
  console.log('You are a winner!')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
