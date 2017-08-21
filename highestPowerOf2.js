const solution = n => {
	for (var i = Math.floor(Math.log2(n)); i >= 0; i--) {
		var pow2 = Math.pow(2,i);
		if (n % pow2 === 0) return pow2;
	}	
};

console.log(solution( 123 )); // 1
console.log(solution( 192 )); // 64