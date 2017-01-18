function dblLinear(n) {
 let u = [1]
 for (var i = 0; u.length < n; i++) {
   let y = (2 * u[i]) + 1
   let z = (3 * u[i]) + 1
   u.push(y,z)
 }
 console.log(u)
 return u[n-2]
}

// console.log(
  console.log(dblLinear(10))
// );
