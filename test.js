

var generateRSAKeypair = require('generate-rsa-keypair')
var ursa = require('ursa');
var pair = generateRSAKeypair()

console.log(pair.private) // String with the private key in PEM format
console.log(pair.public)  // String with the public key in PEM format

var key = ursa.createPrivateKey(pair.private);
var crt = ursa.createPublicKey(pair.public);
 
console.log('Encrypt with Public');
var msg = crt.encrypt("chodanun srinil", 'utf8', 'base64');
console.log('encrypted', msg, '\n');
 
console.log('Decrypt with Private');
var de = key.decrypt(msg, 'base64', 'utf8');
console.log('decrypted', de, '\n');
 

// console.log('############################################');
// console.log('Reverse Public -> Private, Private -> Public');
// console.log('############################################\n');
 
// console.log('Encrypt with Private (called public)');
// msg = key.privateEncrypt("Everything is going to be 200 OK", 'utf8', 'base64');
// console.log('encrypted', msg, '\n');
 
// console.log('Decrypt with Public (called private)');
// msg = crt.publicDecrypt(msg, 'base64', 'utf8');
// console.log('decrypted', msg, '\n');