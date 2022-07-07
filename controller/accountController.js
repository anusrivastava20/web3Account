const accountService = require('../services/createAccount.js');

exports.new_account = async function ( req, res ) {
    let ethData = {};
    // await new ETH walletAddress
    ethData = await accountService.createAccountInfo();
    console.log(ethData);
    res.send(ethData);    
}

exports.encrypt_account_privatekey = async function ( req, res ) {
    let encryptedData;
    // await new ETH walletAddress
    console.log(req);
    encryptedData = await accountService.encryptedPrivateKeyResult(req.body);
    res.send(encryptedData);    
}

exports.decrypt_account_privatekey = async function ( req, res ) {
    let decryptedData;
    // await new ETH walletAddress
    console.log(req);
    decryptedData = await accountService.decryptPrivateKey(req.body);
    res.send(decryptedData);    
}

exports.get_balance = async function ( req, res ) {
    let balance;
    // await new ETH walletAddress
    console.log(balance);
    balance = await accountService.getBalance(req.body.address, req.body.domination);
    res.send(balance);    
}