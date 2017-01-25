var bitcoind = require("express").Router();

bitcoind.get('/getinfo', require("./getinfo"));
bitcoind.get('/getpeerinfo', require("./getpeerinfo"));
bitcoind.get('/getnetworkinfo', require("./getnetworkinfo"));
bitcoind.get('/getmempoolinfo', require("./getmempoolinfo"));
bitcoind.get('/getrawmempool', require("./getrawmempool"));
bitcoind.get('/getmempoolentry/:hash', require("./getmempoolentry"));
bitcoind.get('/getblockhash/:index', require("./getblockhash"));

module.exports = bitcoind;

//I shouild create a factory for bitcoind commands and call it, if there is an error I will return 404, if not I will call the method and return the status - I decided not to do it like that, due to security. One might misusse that, so I am creating all the cals statically.
