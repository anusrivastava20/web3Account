const Tx = require('@ethereumjs/tx').Transaction;
const Common = require('@ethereumjs/common');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://www..io/'));

web3.eth.getTransactionCount(fromAddress).then(txCount => {
    const txData = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex( web3.utils.toWei(10,'gwei')), // 10-15 gwei should be ok
        to: this.toAddress,
        from: this.fromAddress,
        value: web3.utils.toHex(
          web3.utils.toWei("0.0001", "ether")  // amount you want to send
        )
      };
      const common = new Common({ chain: "rinkeby" })
      const transaction = Tx.fromTxData(txData, { common }); //transaction = new Tx(txData, {'chain':'mainnet'});
        transaction.sign(
          new Buffer(privateKey, "hex")  // remove .substring(2) if you get errors
        );
        var self = this;
        web3.eth
          .sendSignedTransaction("0x" + transaction.serialize().toString("hex"))
          .on("transactionHash", function(txHash) {
            console.log("txHash: "+ txHash)
          })
          .on("receipt", function(receipt) {
            console.log("receipt: " + receipt);
          })
          .on("confirmation", function(confirmationNumber, receipt) {
            if (confirmationNumber >= 1) {
               console.log("receipt: "+receipt)
            }
          })
          .on("error", function(error) {
            console.log("error sending ETH", error);
          });
});