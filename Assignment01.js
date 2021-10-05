var Web3 = require('web3')

var web3 = new Web3('http://127.0.0.1:8545')
var newAddress = '0x459E33cAC4F3b6e35bE415CD0Fb7943d8fc0dB85'
web3.eth.getBalance(newAddress, (err, Wei) => {balance = web3.utils.fromWei(wei, 'ether')})
