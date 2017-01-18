var nbrOfLaps = function (x, y) {
  let commonDenom = 1
  for(let i = 0; i <= Math.min(x, y); i++) {
    if(y % i === 0 && x % i === 0){ commonDenom = i }
  }
  return [y / commonDenom, x / commonDenom];
}

console.log(nbrOfLaps(64, 158));
