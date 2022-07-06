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
    removeAccount = await walletController.removeAccountFromWallet(req.body.account);
    res.send(removeAccount);    
  }

exports.remove_all_account = async function (req, res) {
  let remove_all_account = await walletController.emptyWallet();
  return remove_all_account;
}

exports.encrypt_all_account_wallet = async function ( req, res ) {
    let encryptAllAccount;
    // await new ETH walletAddress
    encryptAllAccount = await walletController.encryptWalletAccounts(req.body.password);
    res.send(encryptAllAccount);    
  }

exports.decrypt_all_account_wallet = async function ( req, res ) {
    let decryptAllAccount;
    // await new ETH walletAddress
    decryptAllAccount = await walletController.decryptWalletAccounts(req.body);
    res.send(decryptAllAccount);    
  }