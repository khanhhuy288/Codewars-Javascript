function roundAndRound(n, a, b) {
	var i = Math.abs(b);
	while (i > 0) {
		if (b < 0) {
			a--;
			if (a === 0) a = n;
		}
		else {
			a++;
			if (a > n) a = 1;
		} 
		i--;
	}
	return a;
}

console.log(roundAndRound(6,2,-5));			// 3	2->1->6->5->4->3
console.log(roundAndRound(5,1,3));			// 4
console.log(roundAndRound(3,2,7));			// 3
console.log(roundAndRound(100,1,-1));		// 100
console.log(roundAndRound(100,54,100));		// 54
console.log(roundAndRound(97,37,-92));		// 42