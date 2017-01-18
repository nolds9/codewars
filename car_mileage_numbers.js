// Prompt
// Write the function that parses the mileage number input and returns:
//  - a 2 if the number is "interesting"
//  - a 1 if an interesting number occurs within the next two miles
//  - or a 0 if the number is not interesting.


// Interesting numbers are 3-or-more digit numbers
// that meet one or more of the following criteria:
  // - Any digit followed by all zeros: 100, 90000
  // - Every digit is the same number: 1111
  // - The digits are sequential, incementing†: 1234
  // - The digits are sequential, decrementing‡: 4321
  // - The digits are a palindrome: 1221 or 73837
  // - The digits match one of the values in the awesomePhrases array

  //  For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
  //  For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

  // Helpers
  let toA = num => `${num}`.split('')
  let numZeroes = num => `${num}`.split('').filter( n => n === "0" ).length

  // Checks
  let isIdentical = num => toA(num).every( (n,i,arr) => n === arr[0] )
  let isPSequential = num => toA(num).every( (n,i,arr) => i + 1 != arr.length ? n + 1 === arr[i + 1] : true )
  isPSequential(567)
  let isNSequential = num => toA(num).every( (n,i,arr) => n - 1 === arr[i+1] )
  let isPalindromic = num => `${num}` === toA(num).slice().reverse().join('')
  let isFollowedByZeroes = num => {
    return `${num}`
      .split('')
      .slice(`${num}`.length - numZeroes(num))
      .every( n => n === '0')
  }

  // Business logic
  let isInterestingNumber = num => (
    isFollowedByZeroes(num)||
    isIdentical(num) ||
    isPalindromic(num)
  )

  function isInteresting(number, awesomePhrases) {
    // Go to town!
  }
