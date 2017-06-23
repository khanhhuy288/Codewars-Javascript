function logicalCalc(array, op){
	switch (op) {
		case 'AND': 
			return array.every(x => x === true);
		case 'OR':
			return array.some(x => x === true);
		case 'XOR':
			return array.filter(x => x === true).length % 2 !== 0;
	}
}

var ops = {
  'AND': (a, b) => a && b,
  'OR': (a, b) =>  a || b,
  'XOR': (a, b) => a !== b
};


function logicalCalc1(array, op){
  return array.reduce(ops[op]);
}

console.log(logicalCalc([true, true, true, false], "AND"));					// false
console.log(logicalCalc([true, true, true, false], "OR"));					// true
console.log(logicalCalc([true, true, true, false], "XOR"));					// true
console.log(logicalCalc([true, true, false, false], "AND"));				// false
console.log(logicalCalc([true, true, false, false], "OR"));					// true
console.log(logicalCalc([true, true, false, false], "XOR"));				// false

