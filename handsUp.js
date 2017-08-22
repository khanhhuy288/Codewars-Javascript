const getPositions = s => [s % 3, ~~(s / 3 % 3), ~~(s / 9 % 3)];

console.log(getPositions(54));		// [0, 0, 0]
console.log(getPositions(98));		// [2, 2, 1]
console.log(getPositions(3));		// [0, 1, 0]
console.log(getPositions(7));		// [1, 2, 0]
console.log(getPositions(9));		// [0, 0, 0]
console.log(getPositions(11));		// [2, 0, 1]