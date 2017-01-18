let toA = num => `${num}`.split('')
let triple = (n, i, all) => (n === all[i - 1] && n === all[i - 2])
let double = (n, i, all) => (n === all[i - 1])
let hasTriple = num => toA(num).some(triple)
let hasDouble = num => toA(num).some(double)

function tripledouble(num1, num2) {
  let doubles = toA(num2).filter(double)
  let triples = toA(num1).filter(triple)
  let isTripleDouble = false

  if(hasTriple(num1) && hasDouble(num2)){
    triples.forEach(n => {
      if (doubles.includes(n)){
        isTripleDouble = true
      }
    })
  }
  return isTripleDouble ? 1 : 0
}

console.log(tripledouble(4981972555333333, 415213433));
