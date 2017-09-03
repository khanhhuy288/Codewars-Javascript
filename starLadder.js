function pattern(n){
	var output = '1\n';
 	for (var i = 1; i < n; i++) {
 		output += '1' + '*'.repeat(i) + (i + 1) + '\n';
 	}
 	return output;
}

console.log(pattern(3));	// "1\n1*2\n1**3"
console.log(pattern(7));	// "1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7"

// 1
// 1*2
// 1**3
// 1***4
// 1****5
// 1*****6
// 1******7
// 1*******8
// 1********9
// 1*********10