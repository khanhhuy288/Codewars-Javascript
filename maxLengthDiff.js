function mxdiflg(a1, a2) {
	if (a1.length == 0 || a2.length == 0)
		return -1;
	var length1 = a1.map(x => x.length);
	var length2 = a2.map(x => x.length);
	var max1 = Math.max(...length1);
	var max2 = Math.max(...length2);
	var min1 = Math.min(...length1); 
	var min2 = Math.min(...length2);
	return Math.max(max1 - min2, max2 - min1);
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2));	// 13