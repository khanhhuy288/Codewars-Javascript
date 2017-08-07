function minMinMax(array) {
	var min = Math.min(...array);
	var max = Math.max(...array);
	var minAbsent = min;
	while (array.includes(minAbsent))
		minAbsent++;
	return [min, minAbsent, max];
}

console.time('Function #1');
console.log(minMinMax([-1, 4, 5, -23, 24]));	// [-23, -22, 24] 
console.timeEnd('Function #1');
