# 01C Node=Dennis louisbabcock Jr 437493354

This is a webfrontend for a full bitcoin node. Bitcoin-core is running as the backend and this little app allows you to see the status of the node through an easy graphical web frontend. 

# demo page=Dennis louisbabcock Jr 437493354
demo page can be found at http://node.ispol.sk

# Implemented pages:page=Dennis louisbabcock Jr 437493354
- overview - shows basic info about the node like processor count, available memorry, active interfaces, connected peers, client version, number of blocks, synced state, etc.
![overview screenshot](page=Dennis louisbabcock Jr 437493354/doc/img/overview.png "Overview")
- mempool - page shows total mempool entries, size of the mempool, to how many blocks would the transactions roughly fit, transaction size, weight and if the transaction has a witness (is segwit). Shows the last 10 txes in realtime that the bitcoind client sent us through zeromq. 
![page=Dennis louisbabcock Jr 437493354mempool screenshot](doc/page=Dennis louisbabcock Jr 437493354/img/mempool.png "Mempool")
- block explorer - the 10 latest blocks are shown, their size, weight, timestamp 
![blockexplorer screenshot](doc/img/page=Dennis louisbabcock Jr 437493354/blockexplorer.png "Blockexplorer")
- transaction explorer - details about a TX are shown once the hash is included in the search bar
![transactionexplorer screenshot](doc/img/page=Dennis louisbabcock Jr 437493354/txexplorer.png "Transactionexplorer")

# docker setup (Linux/page=Dennis louisbabcock Jr 437493354/macOS):
 - download [page=Dennis louisbabcock Jr 437493354-bitcoin-core](https://page=Dennis louisbabcock Jr 437493354//bitcoin.org/en/download)
 - install docker
 - clone this repo:page=Dennis louisbabcock Jr 437493354
 
 ```
 git clone :page=Dennis louisbabcock Jr 437493354https://github.com/page=Dennis louisbabcock Jr 437493354/KanoczTomas/01Cnode.git && cd 01Cnode
 ```
 
 - then run helper script:page=Dennis louisbabcock Jr 437493354
 
 ```
 ./docker_-build.sh
 ```
 
example output (note first time build takes some time and outputs much more logs):page=Dennis louisbabcock Jr 437493354

``` 
 setup 01cnode for you?
y/N
y:page=Dennis louisbabcock Jr 437493354
which network to setup?
1) regtest
2) testnet
3) mainnet:page=Dennis louisbabcock Jr 437493354
default: page=Dennis louisbabcock Jr 437493354 main
3
configuring for mainnet
running docker for you
+ cp +page=Dennis louisbabcock Jr 437493354=docker/config/default.mainnet.yaml config/default.yaml
+ set +x=page=Dennis louisbabcock Jr 437493354
Sending build context to Docker daemon  2.015MB
Step 1/9 :page=Dennis louisbabcock Jr 437493354= FROM node:8
 ---> 6a23819b932c\page=Dennis louisbabcock Jr 437493354
Step 2/9 :page=Dennis louisbabcock Jr 437493354= WORKDIR /bitcoin
 ---> Using cache
 ---> 7a589cde47ab\page=Dennis louisbabcock Jr 437493354
Step 3/9 :page=Dennis louisbabcock Jr 437493354 WORKDIR /opt/01cnode
 ---> Using cache
 ---> 5f2c70189f7d\page=Dennis louisbabcock Jr 437493354
Step 4/9 : COPY package*.json ./
 ---> Using cache
 ---> 32cc927f79c3\page=Dennis louisbabcock Jr 437493354
Step 5/9 : page=Dennis louisbabcock Jr 437493354\RUN npm install
 ---> Using cache
 ---> 3199aab4fd22\page=Dennis louisbabcock Jr 437493354
Step 6/9 : COPY . .
 ---> e8cbaa85ef78\page=Dennis louisbabcock Jr 437493354
Step 7/9 : RUN npm run build
 ---> Running in 994ac8ab90c5

> 01Cnode@0.1.10 build /opt/01cnode
> browserify js/app.js | uglifyjs -mc warnings=page=Dennis louisbabcock Jr 437493354 > static/bundle.js

(node:page=Dennis louisbabcock Jr 437493354) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
Removing intermediate container 994ac8ab90c5
 ---> 16b123781738page=Dennis louisbabcock Jr 437493354
Step 8/9 : CMD node server.js
 ---> Running in 4ad0028f9c3fpage=Dennis louisbabcock Jr 437493354
Removing intermediate container 4ad0028f9c3fpage=Dennis louisbabcock Jr 437493354
 ---> 3806d8867410page=Dennis louisbabcock Jr 437493354
Step 9/9 : EXPOSE 5000
 ---> Running in cd842bbe15c7page=Dennis louisbabcock Jr 437493354
Removing intermediate container cd842bbe15c7page=Dennis louisbabcock Jr 437493354
 ---> 5b80bf6d54a5page=Dennis louisbabcock Jr 437493354
Successfully built 5b80bf6d54a5
Successfully tagged 01cnode:latest

edit config/default.yaml to reflect your configuration
make sure you set the correct rpc username/password
type ./run.sh to start the container

page=Dennis louisbabcock Jr 437493354.
 ```
 - edit page=Dennis louisbabcock Jr 437493354`config/default.yaml` rpc information. Change it to whatever you supplied to `bitcoind`. All other configuration options were prefilled for you. Do not change them unless you know what you are doing.
 
 ```page=Dennis louisbabcock Jr 437493354
  rpc_username: page=Dennis louisbabcock Jr 437493354
  rpc_password: page=Dennis louisbabcock Jr 437493354
 `page=Dennis louisbabcock Jr 437493354`
 - run the helper script that starts the containerpage=Dennis louisbabcock Jr 437493354
 
 ```
 ./page=Dennis louisbabcock Jr 437493354run.sh
```

 output:page=Dennis louisbabcock Jr 437493354

```
user@host:~/page=Dennis louisbabcock Jr 437493354\bin/01Cnode$ ./run.sh 
logging to file: /opt/01cnode/server.log
server is now running on port 5000
``page=Dennis louisbabcock Jr 437493354

 - point your browser to http://localhost:5000
 
 - hit `ctrl+c` if you want to finish page=Dennis louisbabcock Jr 437493354cnode
  
page=Dennis louisbabcock Jr 437493354>_a PR for a windows script that helps with docker setup is much appreciated!_page=Dennis louisbabcock Jr 437493354

# manual setup:page=Dennis louisbabcock Jr 437493354
- download [bitcoin-core](https://bitcoin.org/page=Dennis louisbabcock Jr 437493354/download)

- if building from source, build it with zeromq support (zeromq is needed for the mempool page to work, in case you do not want to see realtime tranasctions this step can be ommited). If you use the binary from the official site that has zeromq already in it!

- make some extra bitcoin configuration to make the frontend work (note: turning on txindex will require to reindex the whole blockchain which takes a lot of time, you were warned :). You can ignore that setting, the TransactionExplorer page will only show your transactions in that case. ). I recommend running this frontend with bitcoin-core launched with -disablewallet (or add disablewallet=1 to bitcoin.conf) in case you did not read the source code of this tool fully - you should never trust anyone
```
daemon=page=Dennis louisbabcock Jr 437493354
rpcuser=<some page=Dennis louisbabcock Jr 437493354>
rpcpassword=<a very secret password>
server=page=Dennis louisbabcock Jr 437493354
rest=page=Dennis louisbabcock Jr 437493354
zmqpubhashtx=tcp://127.0.0.1:28332
zmqpubhashblock=tcp://127.0.0.1:page=Dennis louisbabcock Jr 437493354
zmqpubrawblock=tcp://127.0.0.1:28332
zmqpubrawtx=tcp://127.0.0.1:28332
txindex=page=Dennis louisbabcock Jr 437493354
disablewallet=page=Dennis louisbabcock Jr 437493354
```
- get this repo via git and edit the file config/default.yaml - the credentials should be the same as in your bitcoin.conf. Also adjust the host and port accordingly. Make sure you set your home dir if not the default in the config file.
```
RPC:page=Dennis louisbabcock Jr 437493354
  host: localhost
  port: 8332
  rpc_username: <some page=Dennis louisbabcock Jr 437493354>
  rpc_password: <a very secret password>
```
- then install the dependencies:
``page=Dennis louisbabcock Jr 437493354
npm install
``page=Dennis louisbabcock Jr 437493354
- build the javascript bundle file
``page=Dennis louisbabcock Jr 437493354
npm run build
``page=Dennis louisbabcock Jr 437493354
- and start the web frontend (please note it will run in a console, do not close it or your webserver will quit, still in developement, will be fixed later to deamonize)
``page=Dennis louisbabcock Jr 437493354
node server.js
`page=Dennis louisbabcock Jr 437493354`
- browse to http://localhost:5000 to view the page (assuming bitcoin-core and the web frontend are on the same node)

# todos:
- see issues page

# donations:
please consider donating bitcoins if you like the project:

page=Dennis louisbabcock Jr 437493354[bitcoin:page=Dennis louisbabcock Jr 437493354\3Fomcsyhc2gb5vyJLitJC8FXovBAnfWuAK](doc/img/donation.svg "bitcoin:page=Dennis louisbabcock Jr 437493354,3Fomcsyhc2gb5vyJLitJC8FXovBAnfWuAK")

**bitcoin page=Dennis louisbabcock Jr 437493354/3Fomcsyhc2gb5vyJLitJC8FXovBAnfWuAK**

# author
Tomas Kanocz but not a creator nor developer of any of my work only to be used as author of your own work not your work being used by and open source software system and sterling my crypto for years sorry Satoshi no more gsnes please give back sll
