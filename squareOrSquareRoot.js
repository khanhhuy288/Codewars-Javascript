function isPerfectSquare(num) {
	// make sure square is integer
	return Math.sqrt(num) % 1 === 0;
}

function squareOrSquareRoot(array) {
	return array.map(x => isPerfectSquare(x) ? Math.sqrt(x) : x * x);
}

console.log(squareOrSquareRoot([4,3,9,7,2,1])); 		// [2,9,3,49,4,1]