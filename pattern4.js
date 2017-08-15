function pattern(n){
 	var res = ''; 
 	for (var i = 1; i <= n; i++) {
		for (var j = i; j <= n; j++) {
		 	res += j;
		}
		res += '\n';
	}
 	return res;
}

console.log(pattern(1));		// "1"
console.log(pattern(2));		// "12\n2"
console.log(pattern(5));		// "12345\n2345\n345\n45\n5"