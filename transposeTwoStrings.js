function transposeTwoStrings(arr){
	var m = Math.min(arr[0].length, arr[1].length);
	var longStr = arr[0].length >= arr[1].length ? arr[0] : arr[1];
	var c = [];
	for (var i = 0; i < m; i++) {
		c.push(arr[0][i] + ' ' + arr[1][i]);
	}
	return c.concat([...longStr].slice(i).map(e => '  ' + e)).join('\n');
}

console.log(transposeTwoStrings(['Hello','World']));	// "H W\ne o\nl r\nl l\no d"
console.log(transposeTwoStrings(['joey','louise']));	// "j l\no o\ne u\ny i\n  s\n  e"