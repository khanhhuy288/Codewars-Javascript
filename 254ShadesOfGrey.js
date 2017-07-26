function shadesOfGrey(n){
	if (n > 254)
		n = 254;
	var result = []; 
	for (var i = 1; i <= n; i++) {
		result.push(`#${(i < 16 ? 0 + i.toString(16) : i.toString(16)).repeat(3)}`);
	}
	return result; 
}

console.log(shadesOfGrey(40));