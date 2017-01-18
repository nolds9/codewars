let parseNames = picture => picture.match(/\w/g).filter(l => !l.match(/\_/g)).join('').split(/(?=[A-Z])/)
const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

let parseQuestion = questions => {
  let out = []
   questions.trim().split("\n").forEach((question, i) => {
     let q = {}
     q.question = question
     q.asker = question.trim().split(':')[0]
     q.direction = question.trim().split(' ')[2]
     out.push(q)
  })
  return out
}

const genDir = (names, pos) => {
  return {
    left: (names[pos.y] && names[pos.y][pos.x - 1] ? names[pos.y][pos.x - 1] : { name: 'nobody'}),
    right: (names[pos.y] && names[pos.y][pos.x + 1] ? names[pos.y][pos.x + 1] : { name: 'nobody'}),
    upstairs: (names[pos.y - 1] && names[pos.y - 1][pos.x] ? names[pos.y - 1][pos.x] : { name: 'nobody'}),
    downstairs: (names[pos.y + 1] && names[pos.y + 1][pos.x] ? names[pos.y + 1][pos.x] : { name: 'nobody'}),
  }
}

const genSubs = arr => {
  let out = []
  for(let i = 0; i < arr.length; i++){
    if( i == 0 || i % 3 == 0 ){
      out.push(arr.slice(i,  3 + i ))
    }
  }
  return out
}

const genPositions = arr => {
  return arr.map((row, i) => {
    return row.map((name, j) => {
      return {
        name,
        pos: {
          x: j,
          y: i,
        }
      }
    })
  })
}

function mathTest(picture, questions){
  let names = genPositions(genSubs(parseNames(picture)))
  let qs = parseQuestion(questions)
  let out = ''
  qs.forEach(({ asker, direction, question }, i) => {
    let person = flatten(names).find(p => p.name === asker)
    let neighbors = genDir(names, person.pos)
    out += question.replace(/\?/g, neighbors[direction].name)
    if( i !== (qs.length - 1)) {
      out += "\n"
    }
  })
  return out
}

var pic=
`   ______________________
  /_____________________/|
 /_____________________/ |
 |      |      |      |  |
 | Tom  |Jerry | John | /|
 |______|______|______|/ |
 |      |      |      |  |
 | Mike |Peter |Alice | /|
 |______|______|______|/ |
 |      |      |      |  |
 |  Bob | Bill | Wang | /
 |______|______|______|/`

var questions = `
  Wang: My right neighbor is (?)
  Wang: My downstairs neighbor is (?)
  Tom: My upstairs neighbor is (?)
`

console.log(mathTest(pic, questions))
