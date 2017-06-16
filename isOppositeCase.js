function isOpposite(s1,s2){
	return (s1 == '' || s2 == '') ? false : switchCase(s1) == s2;
}

function switchCase(s) {
	return s.split('').map(function(c){
		return isUpperCase(c) ? c.toLowerCase() : c.toUpperCase();
	}).join('');
}

function isUpperCase(c) {
	return c.toUpperCase() == c;
}

console.log(isOpposite("ab","AB")); 				// true
console.log(isOpposite("aB","Ab")); 				// true
console.log(isOpposite("aBcd","AbCD")); 			// true
console.log(isOpposite("aBcde","AbCD"));			//  false
console.log(isOpposite("AB","Ab")); 				// false
console.log(isOpposite("","")); 					// false
