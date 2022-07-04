const express = require('express');
//const router = express.Router();
//const accountController = require('./createAccount.js');

// initialize our express ap
const app = express();
// directs app to use bodyParser, moved immediately below app declaration so
// that bodyParser works universally.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.raw());


// the port we will be using for access
let port = 3000;
if (process.env.SERVER_PORT != undefined) {
    port = process.env.SERVER_PORT
}

app.listen(port, function () {
	console.log('Example app listening on port 3030!');
  });

// Imports routes for the products
const account = require('./routs.js');

app.use('/account', account);


