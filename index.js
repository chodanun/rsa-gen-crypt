var cryptico = require("cryptico");
var base64 = require('base-64');
var utf8 = require('utf8');
function cryptoObj(passPhrase)
{
   this.bits = 1024; //2048;
   this.passPhrase = passPhrase;
   this.rsaKey = cryptico.generateRSAKey(this.passPhrase,this.bits);
   this.rsaPublicKey = cryptico.publicKeyString(this.rsaKey);
   
   console.log("pb: "+this.rsaPublicKey)
   var bytes = utf8.encode(this.rsaPublicKey);
  var encoded = base64.encode(bytes);
   console.log("RSA PUBLIC KEY BASE64: "+encoded)
   this.encrypt = function(message){
     var result = cryptico.encrypt(message,this.rsaPublicKey);
     console.log("Result: "+result)
     return result.cipher;
   };

   this.decrypt = function(message){
     var result = cryptico.decrypt(message, this.rsaKey);
     return result.plaintext;
   };
}

console.log('---------------------------------------------------------');
var localEncryptor = new cryptoObj("XXyour secret txt or number hereXX");

var encryptedMessage = localEncryptor.encrypt('new message or json code here');
var decryptedMessage = localEncryptor.decrypt(encryptedMessage);

console.log('');
console.log('>>> Encrypted Message: '+encryptedMessage);
console.log('');
console.log('>>> Decrypted Message: '+decryptedMessage);