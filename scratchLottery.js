function scratch(lottery){
	var result = 0; 
	lottery.forEach(function (e) {
		var chars = e.split(' ');
		if (new Set(chars.slice(0, -1)).size == 1) {
			result += +chars.slice(-1);
		}
	});
	return result;
}

console.log(scratch([
"tiger tiger tiger 100",
"rabbit dragon snake 100",
"rat ox pig 1000",
"dog cock sheep 10",
"horse monkey rat 5",
"dog dog dog 1000"]));