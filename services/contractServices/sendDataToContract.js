const Tx = require('@ethereumjs/tx').Transaction
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/4c881e151e0e4242b34c276f326429d3'));

const Common = require('@ethereumjs/common')
const common = new Common.default({ chain: 'rinkeby' })
const toAddress = '0xF4Cb09Ce46234FC80E4343F2025aB4EF63747b9a';
const fromAddress = '0x7bA0037FeD605C7d83BD5Ff7b70c1Eb697691026';
const contractAddress = '0x9FD44cc82c5d540366A283f9Fef91439053220A4';
const abi =  [{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "token",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "token",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "token",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "token",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenOwner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimal",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "founder",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

var contractDetails = new web3.eth.Contract(abi,contractAddress,(error,result) => {return result});
const data = contractDetails.methods.transfer(toAddress,1000).encodeABI();
var sendDataToContract = () => {
  /* Get Nonce value */
  web3.eth.getTransactionCount(fromAddress).then(txCount => {
    const txData = {
      from: fromAddress,
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(1000000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')), // 10-15 gwei should be ok
      value: 0x0,
      to: contractAddress,
      data: data
    };
    console.log("txCount",txCount);

    console.log("txData",txData);
    const transaction = new Tx(txData, { common });
    var privateKey = Buffer.from('4f9736df515bf7380ad7b938e7cdb2638ec2ee0192ed3a845fe78734cfdf9c96', "hex");

    /* Signed the transaction with your private key */
    const serializedTx = transaction.sign(privateKey).serialize().toString('hex')
    const raw = "0x" + serializedTx;

    /* Send the signed Transactions */
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log("txHash: " + txHash);
      console.log("err: " + err);
      //0x1239472ec3b8f23cf79e02d0d48845a638efe4f422a335404aff0c69a1218ddf
      var toAddressBL = contractDetails.methods.balanceOf("0xF4Cb09Ce46234FC80E4343F2025aB4EF63747b9a").call((err,result)=> {return result});
      console.log(toAddressBL)
      var fromAddressBL = contractDetails.methods.balanceOf("0x7bA0037FeD605C7d83BD5Ff7b70c1Eb697691026").call((err,result)=> {return result});
      console.log(fromAddressBL)

    });
  });
}

module.exports.sendDataToContract = sendDataToContract;