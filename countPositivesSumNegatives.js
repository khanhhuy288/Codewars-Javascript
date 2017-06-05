function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0)
    	return [];
    // get positive numbers
    var pos_nums = input.filter(x => x > 0);
    // get negative numbers
    var neg_nums = input.filter(x => x < 0);
    var sum_neg_nums = neg_nums.reduce((a, b) => a + b, 0); 
    return [pos_nums.length, sum_neg_nums];
}

function countPositivesSumNegatives1(input) {
    return (input && input.length) ? [
      input.filter(x => x > 0).length,
      input.reduce((t, c) => c < 0 ? t + c : t, 0)
    ] : [];
}

console.log(countPositivesSumNegatives1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));