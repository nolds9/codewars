// CIPHER
let caesar = (alpha) => (
   (n, s) => {
    let encoded = alpha.map((l,i,all) => all[(all.indexOf(l) + n) % all.length])
    let encodeChar = c => encoded[alpha.indexOf(c)]
    return encodeChar(s)
  }
)

// The Vigenère cipher is a method of encrypting alphabetic text by using a series
// of different Caesar ciphers based on the letters of a keyword.
// It is a simple form of polyalphabetic substitution.

function VigenèreAutokeyCipher(key, abc) {
  this.encode = function (str) {
    let alpha = abc.split('')
    let caesarN = caesar(alpha)

    return str
      .split('')
      .map(l => caesarN(alpha.indexOf(l), l))
      .join('')
  };
  this.decode = function (str) {
    //...
  };
}

// TESTS

var key = 'PASSWORD';
var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var c = new VigenèreAutokeyCipher(key, abc);
console.log("Got: ", c.encode('AAAAAAAAPASSWORDAAAAAAAA'));
console.log("Expected: ", "PASSWORDPASSWORDPASSWORD");
