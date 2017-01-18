let isEureka = num => {
  return num
  .toString()
  .split('')
  .map( (num, index) => Math.pow(parseInt(num), index +1 ) )
  .reduce( (prev, curr) => prev + curr ) === num
}

console.log(isEureka(55))
