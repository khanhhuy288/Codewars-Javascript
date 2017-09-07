function isMadhavArray(arr){
	if (Math.sqrt(8*arr.length + 1) % 1 !== 0) return false;
	var res = []; 
	for (var i = 0, k = 0, j = 0, m = (-1 + Math.sqrt(1 - (-8 * arr.length))) / 2; i < m; i++) {
		k += i; 
		j += i + 1;
		res.push(arr.slice(k, j));
	}
	return new Set(res.map(e => e.reduce((a, b) => a + b, 0))).size == 1;
}

console.log(isMadhavArray([2,1,1]));				// true
console.log(isMadhavArray([2,1,1,4,-1,-1]));		// true
console.log(isMadhavArray([ 6, 2, 4, 2, 2, 2, 1, 5, 0, 0, -12, 13, -5, 4, 1 ]));		// true