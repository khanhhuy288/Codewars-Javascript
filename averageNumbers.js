function averages(numbers) {
	return numbers.map((x, i) => (x + numbers[i + 1])/2).slice(0, -1);
}

console.log(averages([2, 2, 2, 2, 2])); 		// [2, 2, 2, 2]
console.log(averages([2, -2, 2, -2, 2])); 		// [0, 0, 0, 0]
console.log(averages([1, 3, 5, 1, -10])); 		// [2, 4, 3, -4.5]