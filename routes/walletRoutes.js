const express = require('express');
const router = express.Router();

// Require the controllers
const wallet_controller = require('../controller/walletController');

// create a new accounts
router.post('/newWallet', wallet_controller.create_wallet);
router.post('/addAccountToWallet', wallet_controller.add_account_to_wallet);
router.post('/RemoveAccount', wallet_controller.remove_account_wallet);
router.post('/EmptyWallet', wallet_controller.remove_all_account_wallet);


module.exports = router;