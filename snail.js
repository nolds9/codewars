//
// // var left = arr => {
// //  let sorted = []
// //  for(let i = arr.length; i > 0; i--){
// //   sorted.push(arr[i])
// //  }
// //  return sorted
// // }
//
// var right = arr => {
//  let sorted = []
//  for(let i = 0; i < arr.length; i++){
//   sorted.push(arr[i])
//  }
//  return sorted
// }
//
// var top = arr => {
//  let sorted = []
//  for(let i = 0; i < arr.length; i++){
//   sorted.concat(arr.slice(arr.length - 1))
//  }
//  return sorted
// }
//
// var bottom = arr => {
//  let sorted = []
//  for(let i = 0; i < arr.length; i++){
//   sorted.concat(arr.slice(0))
//  }
//  return sorted
// }

//  TODO: account for 5 x 5

snail = function(array) {
  let sorted = []
  let pivot = array[0] ? array[0].length : 0
  let numMids = array[0] ? array[0].length - 2 : 0
  let flattened = array.reduce((prev, curr) => prev.concat(curr), [])
  let lasts = flattened.filter((n, i) => (i + 1) % pivot === 0)
  let firsts = flattened.filter((n, i) => i % pivot === 0)
  let mids = flattened.filter((n, i) => !((i + 1) % pivot === 0) && !(i % pivot === 0))

  console.log("lasts", lasts)
  console.log("mids", mids)
  console.log("firsts", firsts)
  // Build the snailed array
  sorted = array[0].concat(lasts.slice(1)) // go down the last row
  sorted = sorted.concat(mids.slice(mids.length - numMids).reverse()) // go across the back row
  sorted = sorted.concat(firsts.slice(1).reverse()) // go up the first row
  sorted = sorted.concat(mids.slice(numMids, mids.length - numMids))
  return sorted
}
// starts: [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
// Expected: [1, 2, 3, 4, 5, 10, 15, 20, 25, | 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
// actual:   [1, 2, 3, 4, 5, 10, 15, 20, 25, | 22, 23, 24, 21, 16, 11, 6, 3, 4, 7, 8, 9, 12, 13, 14, 17, 18, 19]



console.log(snail([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]));
