function makeParts(arr, chunkSize) {
  var res = []; 
  for (var i = 0; i < arr.length; i += chunkSize) {
  	res.push(arr.slice(i, i + chunkSize));
  }
  return res; 
}

console.log(makeParts([1,2,3,4,5], 2) );			// [[1,2],[3,4],[5]]
console.log(makeParts([1,2,3], 1) );			// [[1],[2],[3]]
console.log(makeParts([1,2,3,4,5], 10) );			// [[1,2,3,4,5]]
