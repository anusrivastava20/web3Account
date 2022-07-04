const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.raw());


// the port we will be using for access
let port = 3000;
if (process.env.SERVER_PORT != undefined) {
    port = process.env.SERVER_PORT
}

app.listen(port, function () {
	console.log('Example app listening on port 3000!');
  });

// Imports routes for the products
const account = require('./routes/accountCreationRoutes');
const wallet = require('./routes/walletRoutes');

app.use('/account', account);
app.use('/wallet', wallet);


