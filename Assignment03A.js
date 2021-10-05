const Web3 = require('web3')
const web3 = new Web3('http://127.0.0.1:8545')
const account1 = '0x459E33cAC4F3b6e35bE415CD0Fb7943d8fc0dB85'
const account2 = '0xF2D0D82c7BEc653db885fB9B5B63013bfE62EE43'

web3.eth.getBalance(account1, (err, result) => {console.log('Balance of Account 02:', result)})

web3.eth.getBalance(account2, (err, result) => {console.log('Balance of Account 02:', result)})

web3.eth.sendTransaction({from: account1, to: account2, value: web3.utils.toWei('2', 'ether')})

web3.eth.getBalance(account1, (err, result) => {console.log('Balance of Account 02:', result)})

web3.eth.getBalance(account2, (err, result) => {console.log('Balance of Account 02:', result)})