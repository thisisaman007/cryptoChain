# cryptoChain
Blockchain implementation of a Cryptocurrency.


Set up the overall blockchain application.
created a new node project *cryptochain* and create a new project using npm init -y.
also we install our first node.js library *jest*(jest is a JS library that runs test on javascript code) using npm i jest --save-dev

Created the basic building block of the blockchain 
- with blocks themselves! we start with building the block class, it consists of timestamp, lasthash, hash and data fields. Here we aalso define a factory method -(factory method - any function that creates a class instance without directly using the constructor method.) to generate GENESIS block.

Started a ""test-driven development"" approach to the project.
- here we write the testing files before hand the actual coding which consists of all the possible tests based on the requirements of the program. It helps in finding missing mistakes and also sets a Goal to achieve while writting the code. We are using *jest* library for the testing purposes.

Built the genesis block - to get the blockchain going.
- config.js file holds all the constant pre written values like Genesis block data and it exports this data in form of an object.

Added functionality to mine a block - create a new block for the blockchain. 
- We add a static funtion which takes previous block and data as input and mines a block.

Developed the important sha-256 hash function. 
- We use crypto module to implement SHA-256 algo as a hashing function.

Applied the hash to mine a block.

Created the fundamental blockchain class.
- this class should have a chain array, with genesis bock as its first element and it should be able to append new blocks using mineBlock, which can be implemented using addBlock() which takes data as argument.

Developed functionality to validate the blockchain, to allow for chain replacement.
- CHAIN VALIDATION -->> concept of inspecting a blockchain, look for correctness, right fields, last hash actually reference the last block, hash should be valid -- << we take all the fields in the block, regenrate the hash -- chech the hash of the block if it matches or not >>
- CHAIN REPLACEMENT -->> blockchain should be able to replace its chain with a new chain of blocks, as long as the new chain is longer, and it is valid. chain replacement is necessary because .. blockchain is not alone, its a network of multiple blockchins comming together and forming a blockchain network with a goal to come to an unanimous of longer and valid chain og blockchains.... multiple nodes have now come to an agreement on an offical set of blocks, the blockchain is now distributed and public, across all the nodes and everyone has an equal stake in maintaining that valid blockchain. Plus its decentralised.


Implemented chain replacement.
- is chain is longer?? if yes then is chain valid?? if yes -->>>then replace the chain,  else don't replace.

Investigated stubbing console output in tests to keep the output clean.
-


Implemented the proof of work system by adding a difficulty and nonce value to each block.
- spend computational power to mine a block. prevent attackers and reward miners. We r using POW inspired by Hashcash, at any given point, it has a level of difficulty, which determines the acceptance range of any hash. Miners will have to generate tons of hash to get the valid one according to the difficulty (mostly difficulty == number of leading zeros in the hash).
Block data = nonce(adjusting value-- NUMBER USED ONCE) is used to generate various hashs unless the target is met based on difficulty.
the difficulty setting is constantly adjusted to meet the optimal rate of block creation/chain grown. for bitcoin this optimal rate is 10mins/block.
51% attack -- a cenario where a evil miner has more than 51% of the computing power of the entire blockchain nework, they have now the power to dominate the network and grow their own chain, with transactions of their choice and everyone else will have no option but to accept it.


Adjusted the difficulty for a block to ensure that blocks are mined at a rate which approaches a set mining rate for the system.

Investigated the proof of work system by writing a script which checked how will the dynamic difficulty adjusted the system to approach the mine rate.

Switched the hexadecimal character-based difficulty criteria to a more fine-grained binary bit-based difficulty criteria.

Prevented a potential difficulty jump attack by adding extra validation for the blockchain.

....................................................................................................................



Set up an express API to allow for interaction to the backend through HTTP requests.
-  goal is to form a network of nodes, running the blockchain application.interacting through a common API.
API is a set of callabe methods that allow parties/nodes to call code in an existing system. FOR BLOCKCHAIN major methods would be to READ THE BLOCKCHAIN -->> a way for external parties can figure out what data is in the block and second method is to WRITING TO THE BLOCKCHAIN.


Created a GET request to read the blockchain.

Added a POST request to write new blocks to the blockchain.

Implemented a real-time messaging network through Redis or PubNub.
- Pub/Sub pattern -->>publisher/subscriber -- networking pattern works around the cooncept of messaging channels. These channels carry messages end-to-end, and the msgs are sends by publishers(who dont care who is getting the request, main focus is successfully broadcasting/sending message on channel itself) and is recieved by subscribers(eho doesnt care who is sending the data, the main focus is data/msg not the sender)
system requires very lil overhead. *Tracking Socket Adresses*
implimenting it using *redis*.

Added the ability to broadcast chains.

Started peers through alternate ports, and broadcasted chains when blocks were mined through the api.

Synchronized chains when new peers connected to the network.

Optimized the implementation to avoid redundant interaction.


....................................................................................................................


Created the core wallet class for the cryptocurrency.
--digital wallet -->
core object of cryptocurrency, first it has 
*balance field* ->balance/net worth of an individual...and second is 
*KEY* --> private key(only wallet owner have it) and public key(public for everyone). 
private key allows individual to create unique digital signature, for every exchange of cryptocurrency they create, they must sign the exchange with their private key to make the transaction official, on other hand, the public key helps others to verify the signature and transaction.
Public address/ Wallets address --> others can send cryptocurrency to that wallet.
transactions -> the objects that capture the information behind the transfer of currency between two individuals in the cryptocurrency. 
it consists of 
	Input: timestamp,Blalance: 500, signature:sender's public key
	Output: Amount:40; Adress:0xbar2
	Output: Amount:460, Adress:0foo1
*Digital Signature*: private key of sender + transaction data == Signature; which can be verified using the public key of sender + the signature == Valid/Invalid.
##Blockchain powerd Cryptocurrency -->> Contain wallet objects; Generates digital signatures and verification; have the transaction object to represent currency exchange.



Developed the cryptographic key pair and public key addressing system.
--we are using elliptic package to generate public private key pair, its an advanced mathematical subject called elliptic curve, it is computationally infeaseble and impossibly expensive & difficult to guess the randomly generated elliptic curve.

github.io/indutny/elliptic   --- >> github repo of the elliptic library


Implementing signature generation and verification to make transactions official.

Built the main transaction class - with the output map and input structure.

Developed functionality to actually validate transactions.

Tied transaction creation with the wallet class.

Allowed transactions to be updated with multiple outputs to efficiently use existing objects.

Improved the hash function to recognize objects with new properties as changes in incoming data.

Covered edges cases with transaction updates to prevent vulnerabilities.



 


