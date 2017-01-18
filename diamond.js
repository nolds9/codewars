let isValid = n => n && n > 0 && n % 2 !== 0
let genLine = n => '*'.repeat(n) + '\n'
let buildString = n => {
 let out = ''
 for(let i = 1; i < n; i++){
   out += genLine(i)
   i =
 }
 out += genLine(n)
 for(let j = n - 1; j > 0; j--){
   out += genLine(j)
 }
 return out
}

function diamond(n){
  if(!isValid(n)) { return null };
  return buildString(n)
}

console.log(diamond(3));
