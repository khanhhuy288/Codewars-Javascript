function giveChange(amount) {
	var res = []; 
	var bills = [100, 50, 20, 10, 5, 1];
	for (var i = 0; i < 6; i++) {
		res.unshift(Math.floor(amount / bills[i]));
		amount %= bills[i]; 
	}
	return res;
}

const giveChange2 = amount => [100, 50, 20, 10, 5, 1].map(a => 
  ([a, amount] = [Math.floor(amount/a), amount % a])[0]).reverse();

console.log(giveChange(365));	// [0,1,1,0,1,3]
console.log(giveChange(217));	// [2,1,1,0,0,2]