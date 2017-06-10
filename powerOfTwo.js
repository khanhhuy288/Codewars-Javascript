function powersOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++){
  	result.push(2 ** i);
  }         
  return result;
} 

function powersOfTwo1(n) {
  return Array.from({length: n + 1}, (v, k) => 2 ** k);
}

console.log(powersOfTwo(0));  			// [1]
console.log(powersOfTwo(1)); 			// [1, 2]
console.log(powersOfTwo(4));			// [1, 2, 4, 8, 16]	