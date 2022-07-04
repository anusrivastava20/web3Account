var Web3 = require('web3');
//var web3 = new Web3 (Web3.givenProvider || new Web3.providers.WebsocketProvider("ws://localhost:8545"));
var web3 = new Web3(new Web3.providers.HttpProvider('https://www..io/'));

var createWallet = async(number) => {
    var newWallet = await web3.eth.accounts.wallet.create(parseInt(number));
    console.log(newWallet);
    return newWallet.Wallet;
}

var addAccountToWallet = async(privateKey) => {
    var addedAccDetails = await web3.eth.accounts.wallet.add(privateKey);
    return addedAccDetails;
}

var removeAccountFromWallet = async(address) => {
    var removeAccDetails = await web3.eth.accounts.wallet.remove(address);
    return removeAccDetails;
}

var emptyWallet = async() => {
    var removeAllAccDetails = await web3.eth.accounts.wallet.clear();
    console.log(removeAllAccDetails);
    return removeAllAccDetails.Wallet;
}


module.exports.createWallet = createWallet;
module.exports.addAccountToWallet = addAccountToWallet;
module.exports.removeAccountFromWallet = removeAccountFromWallet;
module.exports.emptyWallet = emptyWallet;
