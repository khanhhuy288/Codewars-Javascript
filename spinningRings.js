function spinningRings(innerMax, outerMax) {
	var i = 0, o = 0, res = 0; 
	do {
		i -= 1;
		if (i < 0)
			i = innerMax;
		o += 1;
		if (o > outerMax)
			o = 0;
		res++;
	} while (i != o);
	return res; 
}

console.log(spinningRings(2, 3));	//  5