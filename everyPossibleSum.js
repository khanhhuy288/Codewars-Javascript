function digits(num){
	var res = [];
	var str = String(num);
	for (var i = 0; i < str.length - 1; i++) {
		var tail = str.slice(i + 1).split('');
		res.push(tail.map(e => +e + +str[i]));
	}
	return [].concat(...res);
}

console.log(digits(156));	// [ 6, 7, 11 ]
console.log(digits(81596));	// [ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]
console.log(digits(3852));	// [ 11, 8, 5, 13, 10, 7 ]