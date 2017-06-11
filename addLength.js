function addLength(str){
	var str_arr = str.split(' ');
	var result = [];
	for (var i = 0; i < str_arr.length; i++) {
		result.push(`${str_arr[i]} ${str_arr[i].length}`);
	}
	return result;
}

function addLength1(str){
	return str.split(' ').map((x) => `${x} ${x.length}`);
}

console.log(addLength1('apple ban') );		// ["apple 5", "ban 3"]
console.log(addLength1('you will win') );	// ["you 3", "will 4", "win 3"]