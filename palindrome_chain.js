var nextNumber = (num) => {
  return num +
    parseInt(
      `${num}`
      .split('')
      .slice()
      .reverse()
      .join('')
    )
}

var isPalindrome = num => (
  `${num}` === `${num}`.split('').slice().reverse().join('')
)

var palindromeChainLength = function(n, c = 0) {
  if (isPalindrome(n)) return c
  let nxNum = nextNumber(n)
  return palindromeChainLength(nxNum, c + 1)
};


console.log(palindromeChainLength(87))
