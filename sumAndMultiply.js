var sumAndMultiply = function(sum, multiply) {
	var b = -sum, c = multiply, d = Math.sqrt(b*b - 4*c);
	var n1 = (-b-d) / 2, n2 = (-b+d) / 2;
	return [n1, n2].every(e => Number.isInteger(e)) ? [n1, n2] : null; 
};

console.log(sumAndMultiply(13, 12));		// [1, 12]
console.log(sumAndMultiply(6, 9)); 			// [3, 3]
console.log(sumAndMultiply(200, 8452)); 	// null
console.log(sumAndMultiply(15, 56)); 		// [7, 8]