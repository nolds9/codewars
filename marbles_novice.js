var test = {
  values: [ 1, 1, 1, 1, 2, 1, 1, 1 ],
  getWeight(arr1, arr2){
    arr1 = arr1.map(n => this.values[n])
    arr2 = arr2.map(n => this.values[n])
    let sum1 = arr1.reduce((a,b) => a + b)
    let sum2 = arr2.reduce((a, b) => a + b)
    if(sum1 === sum2) return 0
    return sum1 > sum2 ? 1 : -1
  }
}

let matchResult = (scales, arr) => {
 if(arr.length === 2){
  return (scales.getWeight(arr.slice(0, 1), arr.slice(1,2)) === 1) ? arr[0] : arr[1]
 }
 let copy = [...arr]
 let l = copy.length
 let left = copy.slice(0,l/2)
 let right = copy.slice(l/2,l)
 let result = scales.getWeight(left, right)
 return result > 0 ? matchResult(scales, left) : matchResult(scales, right)
}

function findBall(scales) {
 let digits = []
 for(let i = 0; i < 8; i++) digits = digits.concat(i)
 return matchResult(scales, digits)
}

console.log(findBall(test))
