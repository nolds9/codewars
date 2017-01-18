// momma im sorry
const keypad = {
 0: ['0','8'],
 1: ['1','2','4'],
 2: ['1','2','3','5'],
 3: ['2','3','6'],
 4: ['1','4','5','7'],
 5: ['2','4','5','6','8'],
 6: ['3','5','6','9'],
 7: ['4','7','8'],
 8: ['5','7','8','9','0'],
 9: ['6','8','9']
}

let toA = num => `${num}`.split('')

let permutate = str => {
  let arr = str.split('')
  let len = arr.length
  let perms = []
  let tail,rest,tailPerms, next
    if (len == 0) return [str];

    for (var i=0; i<len; i++){
      tail = [...arr];
      rest = tail.splice(i, 1);
      tailPerms = permutate(tail.join(''));

      for (var j=0, jLen = tailPerms.length; j< jLen; j++){
         next = rest.concat(tailPerms[j]);
         perms.push(next.join(''));
       }
    }
   return perms;
}

let getPINs = (observable, coll = [], n = 0) => {
 let obz = toA(observable)
 if (n === obz.length) return coll
 if (n === 0){
   let perms = obz.slice(0, n + 1)

   return getPINs(obz,pins, n + 1)
 }

 console.log("here")
 return coll
}

console.log(getPINs("369"));
