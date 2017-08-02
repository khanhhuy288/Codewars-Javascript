function product(values) {
  return values && values.length != 0 ? values.reduce((a, b) => a * b, 1) : null;
}

console.log(product([5, 4, 1, 3, 9]));	// 540
console.log(product([-2, 6, 7, 8])); 	// -672
console.log(product([10]));				// 10
console.log(product([0, 2, 9, 7]));		// 0
console.log(product(null)); 			// null
console.log(product([])); 				// null