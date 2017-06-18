function sumMul(n,m){
	if (n >= m)
		return 'INVALID';
	var sum = 0;
	for (var i = n; i < m; i += n) {
		sum += i;
	}
	return sum;
}

console.log(sumMul(2,9));    			// 20
console.log(sumMul(3,13));   			// 30
console.log(sumMul(4,123));  			// 1860
console.log(sumMul(4,-7));   			// INVALID