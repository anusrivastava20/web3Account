const express = require('express');
const router = express.Router();

// Require the controllers
const contract_controller = require('../controller/contractController');

// create a new accounts
router.post('/getDetails', contract_controller.get_contract_details);
router.post('/signedTran', contract_controller.send_sign_tran);
router.post('/deployContract', contract_controller.deploy_contract);
router.post('/sendData', contract_controller.send_data_to_contract);
router.post('/getBalance', contract_controller.get_account_balance);




module.exports = router;