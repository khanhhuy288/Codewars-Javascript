function splitTheBill(x) {
	var sum = 0;
	var p = 0;
	for (var prop in x) {
		sum += x[prop];
		p += 1;
	}
	var avg = sum/p;
	var result = {}; 
	for (var prop in x) {
		result[prop] = Math.round((x[prop] - avg) * 100) / 100;
	} 
	return result;
}

const splitTheBill = x => {
  let vals = Object.values(x),
      avg  = vals.reduce((s, v) => s + v) / vals.length;
  return Object.keys(x).reduce((y, v) => (y[v] = +(x[v] - avg).toFixed(2), y), {});
};

console.log(splitTheBill({A: 20, B: 15, C: 10})); // {A: 5, B: 0, C: -5}
console.log(splitTheBill({A: 40, B: 25, X: 10})); // {A: 15, B: 0, X: -15}