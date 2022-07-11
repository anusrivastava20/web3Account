var Web3 = require('web3');
var accountCreateAlgo = require('./accountCreationAlgo.js');
const { keccak256 } = require('../HashAlgorithms/hash.js');
//var web3 = new Web3 (Web3.givenProvider || new Web3.providers.WebsocketProvider("ws://localhost:8545"));
var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/4c881e151e0e4242b34c276f326429d3'));
console.log(web3.currentProvider);

var createAccountInfo = async function(req,res){
	console.log("*** ETH GET NEW ADDRESS ***");
	//keccak256 for hashing and creting a private key
	//ssecp256k1 for getting the public key 
	//keccak256 for creating address
	var newAccounts = await web3.eth.accounts.create();
	//var newAccounts = accountCreateAlgo.create();

	console.table(newAccounts);
	return newAccounts;
}

var encryptedPrivateKeyResult = async function(req, res){ 
	console.log("*** ENCRYPT PRIVATE KEY ***");
	//var createAccount = await createAccountInfo();
    console.log(req);
	var encryptPrivateKey = await web3.eth.accounts.encrypt(req.privateKey, "anu");
	console.table(encryptPrivateKey);
	return encryptPrivateKey;
}

async function decryptPrivateKey(req, res){
	console.log("*** DECRYPT PRIVATE KEY ***");
	var decryptPrivateKey = web3.eth.accounts.decrypt(req, "anu");
	console.table(decryptPrivateKey);
	return decryptPrivateKey;
}

async function getAccounts() {
	try {
		var getAccount = await web3.eth.getAccounts();
		//getAccount.push(Accounts.address);
		console.log(getAccount);

	}
	catch(e){
		console.log(e)
	}
}

var getBalance = async(address, domination) => {
	console.log(address);
	var balance = await web3.eth.getBalance(address,(err,res)=> {balance = res});
	console.log(balance);
	return await web3.utils.fromWei(balance,domination);
}


module.exports.getBalance = getBalance;
module.exports.createAccountInfo = createAccountInfo;
module.exports.encryptedPrivateKeyResult = encryptedPrivateKeyResult;
module.exports.decryptPrivateKey = decryptPrivateKey;
//getAccounts();
