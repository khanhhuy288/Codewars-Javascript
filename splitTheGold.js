function distributionOf(golds){
	var res = [0, 0];
	var copy = golds.slice(); 
	var turn = 0;
	while (copy.length !== 0) {
		res[turn] += copy[0] >= copy[copy.length - 1] ? copy.shift() : copy.pop();
		turn = turn === 0 ? 1 : 0;
	}
	return res;
}

console.log(distributionOf([4,7,2,9,5,2]));			// [11,18]
console.log(distributionOf([10,1000,2,1]));			// [12,1001]