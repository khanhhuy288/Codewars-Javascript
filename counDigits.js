function nbDig(n, d) {
	return [...Array(n+1).keys()].map(x => x*x).join('').match(new RegExp(d, 'g')).length;
}

console.log(nbDig(10, 1));				// 4
console.log(nbDig(5750, 0)); 		// 4700
console.log(nbDig(11011, 2)); 		// 9481
console.log(nbDig(12224, 8)); 		// 7733
console.log(nbDig(11549, 1)); 		// 11905