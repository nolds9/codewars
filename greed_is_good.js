let countDie = arr => (
  arr.reduce((acc, curr) => {
    if(!acc[curr]){
      acc[curr] = 1
    } else {
      acc[curr] += 1
    }
    return acc
  }, {})
)

function score( dice ) {
  let count = countDie(dice)
  let singlesScore = { 1: 100, 5: 50}
  let s = 0
  for(let num in count){
    if(count[num] >= 3) {
      s += num == 1 ? 1000 : (100 * num)
    }
    if(num == 5) {
      s += 50 * (count[num] - 3)
    } else if(num == 1) {
      s += 100 * (count[num] - 3)
    }
  }
  return s
}

console.log(score([ 5,5,5,5,5 ]));
