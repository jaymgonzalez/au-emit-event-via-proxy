const contractAddress = '0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502'
const proxyContractAddress = '0xdaDB48034898F0E155da7506339E1Fc238626c11'
const contractAbi = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: '', type: 'address' },
    ],
    name: 'Winner',
    type: 'event',
  },
  {
    inputs: [],
    name: 'attempt',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
const proxyContractAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_target',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'forward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'target',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

module.exports = {
  contractAbi,
  contractAddress,
  proxyContractAddress,
  proxyContractAbi,
}
