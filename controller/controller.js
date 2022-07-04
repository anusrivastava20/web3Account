const accountController = require('../services/createAccount.js');

exports.new_account = async function ( req, res ) {
    let ethData;
    // await new ETH walletAddress
    ethData = await accountController.createAccountInfo();
    console.log(ethData);
    res.send(ethData);    
}

exports.encrypt_account_privatekey = async function ( req, res ) {
    let encryptedData;
    // await new ETH walletAddress
    console.log(req);
    encryptedData = await accountController.encryptedPrivateKeyResult(req.body);
    res.send(encryptedData);    
}

exports.decrypt_account_privatekey = async function ( req, res ) {
    let decryptedData;
    // await new ETH walletAddress
    console.log(req);
    decryptedData = await accountController.decryptPrivateKey(req.body);
    res.send(decryptedData);    
  }