function closest(arr){
	var copy = arr.slice(); 
	copy.push(0);
	var sorted = copy.sort((a, b) => a - b);
	var prev = Math.abs(sorted[sorted.indexOf(0) - 1]);
	var next = Math.abs(sorted[sorted.indexOf(0) + 1]);
	return prev < next || isNaN(next) ? sorted[sorted.indexOf(0) - 1] : prev > next || isNaN(prev) ? sorted[sorted.indexOf(0) + 1] : null;  
}

console.log(closest([2, 4, -1, -3]));	// -1
console.log(closest([5, 2, -2] ));		// None
console.log(closest([5, 2, 2]  ));		//  2
console.log(closest([13, 0, -6]));		// 0