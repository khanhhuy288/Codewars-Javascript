function isVow(a){
	return a.map(function (x) {
		var c = String.fromCharCode(x);
		if ('aeiou'.indexOf(c) != -1)
			return String.fromCharCode(x);
		return x;
	});
}
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]));
// ["e",121,110,113,113,103,121,121,"e",107,103]
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));
// [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]


