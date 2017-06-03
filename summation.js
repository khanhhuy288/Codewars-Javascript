/*jshint esversion: 6 */
var summation = function (num) {
	var result = 1;
  	for (var i = 2; i <= num; i++) {
  		result += i;
  	}
  	return result;
};

var summation1 = n => n * (n + 1) / 2;

console.log(summation1(2)); 		// 1 + 2 = 3
console.log(summation1(8)); 		// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
