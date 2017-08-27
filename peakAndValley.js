function peakAndValley(arr){
	return arr.filter((n, i) => [arr[i - 1], arr[i - 2], arr[i - 3], arr[i + 1], arr[i + 2], arr[i + 3]].every(e => n > e) || [arr[i - 1], arr[i - 2], arr[i - 3], arr[i + 1], arr[i + 2], arr[i + 3]].every(e => n < e)); 
}

console.log(peakAndValley([10,20,30,40,30,20,10,11,12,13,14,15,16,15,14,13]));	// [40,10,16]
console.log(peakAndValley([50,84,49,47,80,87,87,53,76,30,10]));					// [47]
console.log(peakAndValley([45,94,41,76,29,96,28,13,84,69,25]));					// [96,13]
console.log(peakAndValley([1,16,63,78,53,78,42,39,46,88,49,96,58,82]));			// [39]
console.log(peakAndValley([45,75,47,44,93,95,31,99,49,48,76,2,92,23,26,19,60,45,51]));	// [31,99,2,92,19]
console.log(peakAndValley([49,97,76,56,96,88,65,20,14,93,32]));					// []