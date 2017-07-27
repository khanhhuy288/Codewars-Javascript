function numbersWithDigitInside(x, d) {
	var nums = Array.from(new Array(x), (x,i) => i + 1);
	var numsWithDigit = [];
	nums.forEach(function (num) {
		if (String(num).indexOf(d) != -1)
			numsWithDigit.push(num);
	});
	return [numsWithDigit.length, numsWithDigit.reduce((a, b) => a + b), numsWithDigit.reduce((a, b) => a * b, 1)];
}

console.log(numbersWithDigitInside(11,1));	// [ 3, 22, 110]