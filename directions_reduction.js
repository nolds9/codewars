let opposites = {
 SOUTH: "NORTH",
 NORTH: "SOUTH",
 EAST: "WEST",
 WEST: "EAST"
}

function dirReduc(arr){
  return arr.reduce((prev, curr) =>{
    let opp = opposites[prev[prev.length - 1]]
    if(opp === curr){
      return prev.slice(0, prev.length - 1)
    }
    return [...prev, curr]
  },[])
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
