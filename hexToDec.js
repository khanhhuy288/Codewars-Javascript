function hexToDec(hexString){
	// break string to array of digits
	var hex_digits = hexString.split('');
	if (hex_digits[0] === '-')
		hex_digits.splice(0, 1);

	// capitalize all digits
	hex_digits = hex_digits.map(x => x.toUpperCase());
	var hex_values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	
	var result = 0;
	var i = hex_digits.length - 1;
	hex_digits.forEach(function (digit) {
		result += hex_values.indexOf(digit) * Math.pow(16, i);
		i--;
	});

	return hexString[0] === '-' ? -result : result;
}

function hexToDec1(hexString){
	return  parseInt(hexString, 16);
}

console.log(hexToDec("1")); 					// 1
console.log(hexToDec("a")); 					// 10
console.log(hexToDec("10")); 					// 16
console.log(hexToDec("FF")); 					// 255
console.log(hexToDec("-C")); 					// -12
console.log(hexToDec('7DE'));					// 2014



