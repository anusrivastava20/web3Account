const walletController = require('../services/wallet');

exports.create_wallet = async function ( req, res ) {
    let ethData;
    // await new ETH walletAddress
    ethData = await walletController.createWallet(req.body.number);
    console.log(ethData);
    res.send(ethData);    
}

exports.add_account_to_wallet = async function ( req, res ) {
    let addedAccDetails;
    // await new ETH walletAddress
    addedAccDetails = await walletController.addAccountToWallet(req.body.privateKey);
    res.send(addedAccDetails);    
}

exports.remove_account_wallet = async function ( req, res ) {
    let removeAccount;
    // await new ETH walletAddress
    removeAccount = await walletController.removeAccountFromWallet(req.body.address);
    res.send(removeAccount);    
  }

exports.remove_all_account_wallet = async function ( req, res ) {
    let removeAllAccount;
    // await new ETH walletAddress
    removeAllAccount = await walletController.emptyWallet();
    res.send(removeAllAccount);    
  }