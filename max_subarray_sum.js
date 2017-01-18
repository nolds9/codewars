// NHO 9-29-16
// Helpers
let allPositives = arr => arr.every(n => n > 0)
let allNegatives = arr => arr.every(n => n < 0)
let sum = arr => arr.reduce((prev, curr) => curr + prev, 0)

var maxSequence = function(arr){
  if(arr.length === 0 || allNegatives(arr)) return 0
  if(allPositives(arr)) return sum(arr)
  let sums = []
  for(let i = 0; i < arr.length; i++){
    for(var j = arr.length; j > 0 ; j--) {
      let innerSub = sum(arr.slice(i))
      let outerSub = sum(arr.slice(j - 1))
      let inBetween = sum(arr.slice(i, j - 1))
      sums.push(innerSub)
      sums.push(outerSub)
      sums.push(inBetween)
    }
  }
  return Math.max(...sums)
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// ====================== Solutions ============================== //

// Clever https://en.wikipedia.org/wiki/Dynamic_programming
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

var maxSequence = function(arr){
  return Math.max(0,...arr.reduce((a,c) => [Math.max(a[0]+c || c,c),...a],[]))
}
