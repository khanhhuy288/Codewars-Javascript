function compoundArray(a, b) {
  var result = [];
  var less = a.length <= b.length ? a : b;
  var more = a.length >= b.length ? a : b;
  for (var i = 0, m = less.length; i < m; i++) {
  	result.push(a[i], b[i]);
  }
  return result.concat(more.slice(i));
}

console.log(compoundArray([11, 12], [21, 22, 23, 24]));		// [11, 21, 12, 22, 23, 24]
console.log(compoundArray([2147483647,2147483646,2147483645,2147483644,2147483643], [9])); 
// [2147483647,9,2147483646,2147483645,2147483644,2147483643]);
console.log(compoundArray([214,215,216,217,218], [])); 		// [214,215,216,217,218]
console.log(compoundArray([], [314,315,316,317,318]));		// [314,315,316,317,318]