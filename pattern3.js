function pattern(n){
	var res = '';
	var k = n;
	for (var i = 1; i <= n; i++) {
		for (var j = n; j >= k; j--) {
		 	res += j;
		}
		k--;
		res += '\n';
	}
	return res;
}

console.log(pattern(1));		// "1"
console.log(pattern(2));		// "2\n21"
console.log(pattern(5));		// "5\n54\n543\n5432\n54321"