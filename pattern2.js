function pattern(n){
	var output='';
 	for (var i = 0; i < n; i++) {
 		for (var j = n; j > i; j--) {
			output += j;
		}
		output += '\n';
 	}
	return output.slice(0, -2);
}

console.log(pattern(1)); 			// "1"
console.log(pattern(2)); 			// "21\n2"
console.log(pattern(5)); 			// "54321\n5432\n543\n54\n5"