function solution(a, b){
	return a.length < b.length ? a + b + a : b + a + b;
}

var solution1 = (a, b) => a.length < b.length ? a + b + a : b + a + b;

console.log(solution1("1", "22")); // returns "1221"
console.log(solution1("22", "1")); // returns "1221"