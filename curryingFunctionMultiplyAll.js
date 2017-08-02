function multiplyAll (arr) {
	return function (n) {
		return arr.map(x => x*n);
	}; 
}

console.log(multiplyAll([1, 2, 3])(2));	// [2, 4, 6])
console.log(multiplyAll([])(10));		//	[]