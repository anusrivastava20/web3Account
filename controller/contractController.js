const contractService = require('../services/contract');
const transactionService = require('../services/sendRawTransaction');

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

