function findNextSquare(sq) {
  	var x = Math.round(Math.sqrt(sq)); 
  	return x * x == sq ? (x+1) * (x+1) : -1;
}

console.log(findNextSquare(121));  				// 144
console.log(findNextSquare(625));  				// 676
console.log(findNextSquare(114));  				// -1 since 114 is not a perfect