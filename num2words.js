var numLetterMap = {
   0: "zero",
   1: "one",
   2: "two",
   3: "three",
   4: "four",
   5: "five",
   6: "six",
   7: "seven",
   8: "eight",
   9: "nine",
   10: "ten",
   11: "eleven",
   12: "twelve",
   13: "thirteen",
   15: "fifteen",
   20: "twenty",
   30: "thirty",
   40: "fourty",
   50: "fifty",
   60: "sixty",
   70: "seventy",
   80: "eighty",
   90: "ninty",
   100: "one hundred",
   ""
}

function number2words(n){
   if(numLetterMap[n]) return numLetterMap[n]

   let first = parseInt(`${n}`[0])
   let remaining = str.slice(1).split('').map(n => parseInt(n))
   let word = ''

   for (let key in numLetterMap) {
     for (let i = 0; i < remaining.length; i++) {
       if(key === remaining[i]){
         word += numLetterMap[key]
       }
     }
   }




   // rule == (num.length - (i + 1))
    num.forEach( (numb, i) => {
      if(i !== 0){
        word+= numLetterMap[parseInt(numb)] + "teen"
      }
    })


  return word
}

console.log(number2words(17))
