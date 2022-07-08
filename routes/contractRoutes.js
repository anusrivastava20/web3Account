const express = require('express');
const router = express.Router();

// Require the controllers
const contract_controller = require('../controller/contractController');

// create a new accounts
router.post('/getDetails', contract_controller.get_contract_details);
router.post('/signedTran', contract_controller.send_sign_tran);

module.exports = router;