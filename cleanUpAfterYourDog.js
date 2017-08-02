function crap(x, bags, cap){
	var total = bags * cap;
	var craps = 0;
	for (var i = 0; i < x.length; i++) {
		for (var j = 0; j < x[i].length; j++) {
			if (x[i][j] == 'D')	return 'Dog!!';
			if (x[i][j] == '@') craps++;
			if (craps > total) return 'Cr@p';
		}
	}
	return 'CLean';
}

console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2));	// "Clean"
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1));	//  "Cr@p"
console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2));								// "Dog!!"