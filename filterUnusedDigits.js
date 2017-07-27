// function unusedDigits(){
//   	var digits = [...arguments].join('').split('');
//   	var result = '';
//  	[...Array(10).keys()].forEach(function (e) {
//  		if (digits.indexOf(String(e)) == -1) {
//  			result += e;
//  		}
//  	});
//  	return result;
// }

function unusedDigits(){
  return "0123456789".replace(new RegExp('[' + [...arguments].join('') + ']', 'g'), '');
}

console.log(unusedDigits(12, 34, 56, 78)); // "09"
console.log(unusedDigits(2015, 8, 26)); // "3479"