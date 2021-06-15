const EC = require('elliptic').ec;
const cryptoHash = require('./crypto-hash');

const ec = new EC('secp256k1');//standards of efficient cryptography -- PRIME 256bits (uses a 256bits prime number in a crucial step) Koblits --mathematician 1 stands for first implementation

const verifySignature = ({ publicKey, data, signature }) => {
    const keyFromPublic = ec.keyFromPublic(publicKey, 'hex');
    return keyFromPublic.verify(cryptoHash(data), signature);
};




module.exports = { ec, verifySignature };
