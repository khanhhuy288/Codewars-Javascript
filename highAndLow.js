function highAndLow(numbers){
	var nums = numbers.split(' ');
	return `${Math.max(...nums)} ${Math.min(...nums)}` ;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));		// "542 -214"
console.log(highAndLow("1 -1")); 										// "1 -1"
console.log(highAndLow("1 1")); 										// "1 1"