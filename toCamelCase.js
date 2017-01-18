// NHO: 9-30-16
function toCamelCase(str){
  let re = /(_|-)/g
  if(str.match(re)){
    str = str
    .replace(re, ' ')
    .split(' ')
    .map( (w,i) => {
      return i === 0 ? w :
      w[0].toUpperCase() + w.slice(1)
     })
     .join('')
  }
  return str
}

console.log(toCamelCase('snake_case'));

// ============== Solutions ======================= //

// Clever
function toCamelCase(str){
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
   });
}

function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
