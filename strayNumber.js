function stray(numbers) {
  var num1 = numbers[0];
  var num2, count1 = 0;
  numbers.forEach(function (x) {
  	x == num1 ? count1++ : num2 = x;
  });
  return count1 != 1 ? num2 : num1;
}

console.log(stray([1, 1, 2])); 			// 2