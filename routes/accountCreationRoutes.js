const express = require('express');
const router = express.Router();

// Require the controllers
const account_controller = require('../controller/accountController.js');

// create a new accounts
router.post('/newAccount', account_controller.new_account);
router.post('/encryptPrivateKey', account_controller.encrypt_account_privatekey);
router.post('/decryptPrivateKey', account_controller.decrypt_account_privatekey);
router.post('/getBalance',account_controller.get_balance);
module.exports = router;