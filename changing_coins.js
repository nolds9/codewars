var countChange = (money, coins, count) => {
  let total = 0
  let change = []
  coins.forEach( (coin, index) => {
    while (total + coin <= money) {
      change.push(coin)
      total += coin
     }
   })
  return change 
}

var countChange = function(money, coins) {
  let count = 0
   for (var i = 0; i < coins.length; i++) {
     if (money % coins[i] === 0) count++
   }
   return count
}

// Dynamic Programming
var makeChange = function(amount, coins) {
  var change = [],
      total = 0;
  coins.forEach(function(coin) {
    while (total + coin <= amount) {
      change.push(coin);
      total += coin;
    }
  });
  return change;
};

// curried implementation
var makeChange = function(coins) {
  var change, cache = {};
  return change = function(amount) {
    if (!amount) return [];
    if (cache[amount]) return cache[amount].slice(0);
    var min = [], newMin, newAmount;
    coins.forEach(function(coin) {
      if (
        (newAmount = amount - coin) >= 0 &&
        ((newMin = change(newAmount)).length < min.length-1 || !min.length) &&
        (newMin.length || !newAmount)
      )
        min = [coin].concat(newMin);
    });
    return (cache[amount] = min).slice(0);
  };
};
