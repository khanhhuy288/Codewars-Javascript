function nbYear(p0, percent, aug, p) {
	var year = 0;
	var current = 0;
	var stop = false; 
	while (!stop) {
		current = p0 + p0 * (percent/100) + aug;
		p0 = current;
		if (current >= p) {
			stop = true;
		}
		year++;
	}
	return year;
}
 
console.log(nbYear(1500, 5, 100, 5000)); 				// 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); 		// 10
console.log(nbYear(1500000, 0.25, 1000, 2000000));		// 94
