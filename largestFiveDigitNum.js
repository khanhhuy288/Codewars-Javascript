function solution(digits){
	var arr = [];
	var digitsStr = digits + '';
	for (var i = 0, j = digitsStr.length - 5; i <= j; i++) {
		arr.push(digitsStr.slice(i, i + 5));
	}
	return Math.max(...arr);
}

console.log(solution(1234567890));	// 67890 
