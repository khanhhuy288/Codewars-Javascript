function twoSort(arr) {
	// sort the arr alphabetically
	return arr.sort()[0].split('').join('***');
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));		// 'b***i***t***c
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));		// 'a***r***e'

