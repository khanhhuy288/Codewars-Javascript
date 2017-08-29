function pattern(n){
	if (n < 2) return '';
 	var output = '';
 	for (var i = 2; i <= n; i *= 2) {
 		output += String(i).repeat(i) + '\n';	
 	}
 	return output.slice(0, -1);
}

console.log((pattern(2)));		// "22"
console.log((pattern(1)));		// ""
console.log((pattern(5)));		// "22\n4444"
console.log((pattern(0)));		// ""
console.log((pattern(-25)));	// ""