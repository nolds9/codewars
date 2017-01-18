function cakes(recipe, available) {
  let numCakes = 0
  let availableIngs = 0
  let ratios = []
  for (ing in recipe) {
   if(available[ing]){
      let ratio = available[ing] / recipe[ing]
       if ( ratio >= 1){
          availableIngs++
          ratios.push(Math.floor(ratio))
       }
    }
  }

  if (availableIngs >= Object.keys(recipe).length) {
    numCakes += Math.min(...ratios)
  }
  return numCakes
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
