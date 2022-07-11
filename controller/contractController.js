const contractService = require('../services/contractServices/contract');
const transactionService = require('../services/sendRawTransaction');
const deployContractService = require('../services/contractServices/deployContractOnChain');
const sendDataToContract = require('../services/contractServices/sendDataToContract');

exports.get_contract_details = async function ( req, res ) {
    let ethData = {};
    ethData = await contractService.getContractDetails(req.body.abi,req.body.contractAddress);
    console.log(ethData);
    res.send(ethData);    
}

exports.send_sign_tran = async function ( req, res ) {
    let ethData = {};
    ethData = await transactionService.sendSignedTransaction(req.body);
    console.log(ethData);
    res.send(ethData);    
}


exports.deploy_contract = async function ( req, res ) {
    let ethData = {};
    ethData = await deployContractService.deployContractOnChain();
    console.log(ethData);
    res.send(ethData);    
}

exports.send_data_to_contract = async function ( req, res ) {
    let ethData = {};
    ethData = await sendDataToContract.sendDataToContract();
    console.log(ethData);
    res.send(ethData);    
}

exports.get_account_balance = async function ( req, res ) {
    let ethData = {};
    ethData = await sendDataToContract.getAccountBalance();
    console.log(ethData);
    res.send(ethData);    
}


