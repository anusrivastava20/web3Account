const Tx = require('@ethereumjs/tx').Transaction
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://www..io/'));
const Common = require('@ethereumjs/common')
const common = new Common.default({ chain: 'rinkeby' })
var sendSignedTransaction = (req, res) => {
  web3.eth.getTransactionCount(req.fromAddress).then(txCount => {
    const txData = {
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(21000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')), // 10-15 gwei should be ok
      to: req.toAddress,
      from: req.fromAddress,
      value: web3.utils.toHex(web3.utils.toWei("0.01", "ether")) // amount you want to send
    };
    const transaction = new Tx(txData, { common });
    var privateKey = Buffer.from(req.privateKey, "hex");
    //transaction.sign(Buffer.from(req.privateKey,"hex"));
    //const serializedTx = transaction.serialize();
    const serializedTx = transaction.sign(privateKey).serialize().toString('hex')
    const raw = "0x" + serializedTx;


    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log("txHash: " + txHash);
      return txHash;
    });
  });
}

module.exports.sendSignedTransaction = sendSignedTransaction;