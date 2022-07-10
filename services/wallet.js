var Web3 = require('web3');
//var web3 = new Web3 (Web3.givenProvider || new Web3.providers.WebsocketProvider("ws://localhost:8545"));
var web3 = new Web3(new Web3.providers.HttpProvider('https://www..io/'));
var createWallet = async(number) => {
    var newWallet = await web3.eth.accounts.wallet.create(parseInt(number));
    console.log('%s',newWallet);
    var walletStack = [];
    for (i=0; i < newWallet.length; ++i){
        walletStack.push(newWallet[i]);
    }
    console.log(walletStack);
    return walletStack;
}

var addAccountToWallet = async(privateKey) => {
    var addedAccDetails = await web3.eth.accounts.wallet.add(privateKey);
    console.log(addedAccDetails);
    return addedAccDetails;
}

var removeAccountFromWallet = async(account) => {
    var removeAccDetails = await web3.eth.accounts.wallet.remove(account);
    return removeAccDetails;
}

var emptyWallet = async() => {
    var removeAllAccDetails = await web3.eth.accounts.wallet.clear();
    console.log('%s',removeAllAccDetails);
    return removeAllAccDetails.Wallet;
}

var encryptWalletAccounts = async(password) => {
    var encryptAllWalletAccount = await web3.eth.accounts.wallet.encrypt(password);
    return encryptAllWalletAccount;
}

var decryptWalletAccounts = async(req) => {
    var decryptAllWalletAccount = await web3.eth.accounts.wallet.decrypt(req.keystoreArray,req.password);
    var walletStack = [];
    for (i=0; i<decryptAllWalletAccount.length; i++){
        walletStack.push(decryptAllWalletAccount[i]);
    }
    console.log(walletStack);
    return walletStack;
}

module.exports.createWallet = createWallet;
module.exports.addAccountToWallet = addAccountToWallet;
module.exports.removeAccountFromWallet = removeAccountFromWallet;
module.exports.emptyWallet = emptyWallet;
module.exports.encryptWalletAccounts = encryptWalletAccounts;
module.exports.decryptWalletAccounts = decryptWalletAccounts;
