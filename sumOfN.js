function sumOfN(n) {
  var arr = [];
  var num = 0;
  for (var i = 0; i <= Math.abs(n); i++) {
  	num = n > 0 ? num + i : num - i;
    arr.push(num);
  }
  
  return arr; 
}

console.log(sumOfN(3));			// [0, 1, 3, 6]
console.log(sumOfN(-4));		// [0, -1, -3, -6, -10]  
console.log(sumOfN(1));			// [0, 1]   