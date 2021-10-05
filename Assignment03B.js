var Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://ropsten.infura.io/v3/6865f575444b44a585c94f5e99e47004"
);

const account1 = "0x2BfFe6aC5034c21D46dAd1D8c3aDEbDb6292ece6";
const account2 = "0x1590529d3C97F70d6cDc785223688Cb9f1E759F6";

// web3.eth.getBalance(account1, (err, bal) => {
//     console.log('Account 01:', web3.utils.fromWei(bal, 'ether'))
// })

// web3.eth.getBalance(account2, (err, bal) => {
//     console.log('Account 02:', web3.utils.fromWei(bal, 'ether'))
// })

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex');
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex');

web3.eth.getTransactionCount(account1, (err, txCount) => {
  //Build Transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei("1", "ether")),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
  }


  //Sign the Transaction

  const tx = new Tx(txObject);
  tx.sign(privateKey1);

  const serializedTransaction = tx.serialize();
  const raw = "0x" + serializedTransaction.toString("hex");

  //Broadcast the Transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log("txHash", txHash);
  });
});
