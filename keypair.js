var generateRSAKeypair = require('generate-rsa-keypair')

var pair = generateRSAKeypair()

var pb = pair.public;
var pb_string = "";
pb.split('\n').map( (x,y) => {
    if (y>0 && y <8)
        pb_string+=x;
});

console.log(pb_string);