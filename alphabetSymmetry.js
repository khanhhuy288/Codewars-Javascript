const solve = arr => arr.map(e => e.split('').reduce((a, b, i) => a + (b.toLowerCase().charCodeAt() - 97 == i ? 1 : 0), 0));

console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
console.log(solve(["abide","ABc","xyz"]));	// [4,3,0]
