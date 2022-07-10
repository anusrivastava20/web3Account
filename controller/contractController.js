const contractService = require('../services/contract');
const transactionService = require('../services/sendRawTransaction');
const deployContractService = require('../services/deployContractOnChain');

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




