
function firstNonRepeatingLetter(s) {
  let repeats = s
     .split("")
     .filter( (l,i,all) => {
       all = all.map(l => l.toLowerCase() )
       return all.indexOf(l.toLowerCase()) === all.lastIndexOf(l.toLowerCase())
     })
   return repeats.length === 0 ? '' : repeats[0]
}



console.log(firstNonRepeatingLetter("sTress"));
