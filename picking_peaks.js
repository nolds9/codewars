// function pickPeaks(arr){
  // let obj = { pos: [], peak: [] }
  // let isPeak = true
  // arr.slice(1, arr.length -1).forEach( (num, i) => {
  //   if( num > arr[i-1] ){
  //     if(isPeak){
  //       obj.pos.push(i + 1)
  //       obj.peak.push(num)
  //     }
  //     isPeak = false
  //   } else {
  //     isPeak = true
  //   }
  // })
//  return obj
// }


function pickPeaks(arr){
  return arr
    .map((e,i,all)=>{
      if (e >= all[i+1] && e >= all[i-1])
        return [e,i]
    })
    .filter( (e,i,all) =>{
      if(e){
        return all.slice(0,i).map(a => a && a[0]).indexOf(e[0]) === -1
      }
    })
    .reduce((a,b) => {
      return {
        pos: [...a.pos, b[1]],
        peaks: [...a.peaks, b[0]]
      }
    }, { pos:[], peaks:[] })
}

console.log(pickPeaks([3,2,3,6,4,1,2,3,3,2,1,2,3]));
