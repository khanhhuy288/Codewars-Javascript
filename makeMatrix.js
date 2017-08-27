function makeMatrix(arr1,arr2){
	var diff = arr1.filter(e => arr2.indexOf(e) < 0).concat(arr2.filter(e => arr1.indexOf(e) < 0)).sort((a, b) => a - b);
	var matrixSide = Math.floor(Math.sqrt(diff.length));
	var res = [];
	for (var i = 0, m = Math.pow(matrixSide, 2); i < m; i += matrixSide) {
		res.push(diff.slice(i, i + matrixSide));
	}
	return res;
}

console.log(makeMatrix([0,1,2,3,4,5],[5,6,7,8,9])); // [[0,1,2],[3,4,6],[7,8,9]]
console.log(makeMatrix([1,2,3,4,5],[5,6,7,8,9])); 	// [[1,2],[3,4]]
console.log(makeMatrix([1,2,3,4,5],[2,3,4,5,6])); 	// [[1]]
console.log(makeMatrix([1,2,3,4,5],[1,2,3,4,5])); 	// []