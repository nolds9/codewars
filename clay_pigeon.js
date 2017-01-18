let test = [
  [ { P1: 'XX', P2: 'XO' }, true ],
  [ { P1: 'OX', P2: 'OO' }, false ],
  [ { P1: 'XX', P2: 'OX' }, true ],
]


// let score = (round, person) => scoreMap[round[person]]
// let peteShots = x.map(round => round[0].P1)
// let philShots = x.map(round => round[0].P2)
// console.log(peteShots);

function shoot(x){
  let scoreMap = { XX: 2, OX: 1, XO: 1, OO: 0}
  let scores = { "Pete": 0, "Phil": 0 }
  x.forEach(round => {
    if(round[1]){ // multiply score by 2 if its a bonus round
      scores["Pete"] += 2 * (scoreMap[round[0].P1])
      scores["Phil"] += 2 * (scoreMap[round[0].P2])
    } else {
      scores["Pete"] += scoreMap[round[0].P1]
      scores["Phil"] += scoreMap[round[0].P2]
    }
  })
  if(scores["Pete"] === scores["Phil"]) return "It's a draw!"
  return scores["Pete"] > scores["Phil"] ? "Pete wins!" : "Phil wins!"
}
console.log(shoot(test));
