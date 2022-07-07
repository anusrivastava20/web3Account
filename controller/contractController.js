const contractService = require('../services/contract');

exports.get_contract_details = async function ( req, res ) {
    let ethData = {};
    ethData = await contractService.getContractDetails(req.body.abi,req.body.contractAddress);
    console.log(ethData);
    res.send(ethData);    
}

