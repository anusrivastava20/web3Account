var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://www..io/'));

var getContractDetails = async(abi,contractAddress) => {
    console.log(JSON.stringify(abi));
    var contractDetails = new web3.eth.Contract(abi,contractAddress,(error,result) => {return result});
    var contractName = await contractDetails.methods.name().call((err,result)=> {return result});
    var symbol = await contractDetails.methods.symbol().call((err,result)=> {return result});
    var totalSupply = await contractDetails.methods.totalSupply().call((err,result)=> {return result});
    return {contractName,symbol,totalSupply};

};

module.exports.getContractDetails = getContractDetails;