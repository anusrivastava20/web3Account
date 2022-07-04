var Web3 = require('web3');
//var web3 = new Web3 (Web3.givenProvider || new Web3.providers.WebsocketProvider("ws://localhost:8545"));
var web3 = new Web3(new Web3.providers.HttpProvider('https://www..io/'));
// change providerrinkeby
console.log(web3.currentProvider);
var newAccounts = null;
console.log(newAccounts);

var createAccountInfo = async function(req,res){
	console.log("*** ETH GET NEW ADDRESS ***");
	newAccounts = await web3.eth.accounts.create();
	//var newAccounts = await web3.eth.personal.newAccount('happysingh').then(newAccount => console.log(newAccount));;
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


module.exports.createAccountInfo = createAccountInfo;
module.exports.encryptedPrivateKeyResult = encryptedPrivateKeyResult;
module.exports.decryptPrivateKey = decryptPrivateKey;
//getAccounts();
