function isFunction(pairs) {
  var x = new Set(pairs.map(p => p[0])).size;
  var y = new Set(pairs.map(String)).size;
  return y;
}

console.log(isFunction([[0.5,1.5],  [2.5,3.5]]));	// true
console.log(isFunction([[4,5],  [5,5],  [4,5]]));	// true
console.log(isFunction([[5,1],  [2.5,3.4],  [5,6],  [7,2]])); 	// false
