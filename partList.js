function partlist(arr) {
	var result = []; 
	for (var i = 1; i < arr.length; i++) {
		result.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
	}
	return result;
}

console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"])); 
// [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]