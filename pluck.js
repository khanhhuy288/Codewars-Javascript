function pluck(objs, name) {
	var result = []; 
	objs.forEach(function (obj) {
		result.push(obj[name]);
	});
	return result;
}

console.log(pluck([{'a':1}, {a:2}], 'a'));			// [1,2]