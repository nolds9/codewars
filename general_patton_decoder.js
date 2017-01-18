// console.log (device.encode ('What is this ?')) // EFhZINtl3rgKW9
// console.log (device.encode ('!@#$%^&*()_+-')) // !@#$%^&*()_+-             no ?
// console.log(device.encode('?')); // .
// console.log('.'); // 6
// console.log(device.encode('abcdefghijklmnopqrstuvwxyz')); // bhx,zWyLZ3pOGIhzeXTYtjAaDW


let decode = function (w) {
  w = w.replace(' ', '_')
  let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let enAlpha = 'bhx,zWyLZ3pOGIhzeXTYtjAaDW'.split('')
  let key = 'MOQSUWY024'.split('')
  let book = {}
  let dict = {}

  for(let i = 0; i < key.length; i++){ dict[i] = key[i] }
  for(let i = 0; i < alpha.length; i++){ book[alpha[i]] = enAlpha[i] }

  let bible = Object.assign({}, book, dict)
  bible['?'] = '.'
  bible['_'] = ' ' // TODO replace "_"'s with spaces in w later
  console.log(bible);

  return w ;
}
console.log( decode ('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz') );
// console.log (device.encode ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) ;
// console.log (device.encode ('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')) ;
// console.log (device.encode ('!@#$%^&*()_+-')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz') ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//   return device.encode (a) ;
// }).join ('')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//   return device.encode ('_'+a)[1] ;
// }).join ('')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//   return device.encode ('__'+a)[2] ;
// }).join ('')) ;
