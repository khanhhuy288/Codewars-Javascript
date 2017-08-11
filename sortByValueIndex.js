function sortByValueAndIndex(array) {
  return array.map((n, i) => [n * (i + 1), n]).sort((a, b) => a[0] - b[0]).map(n => n[1]);
}

console.log(sortByValueAndIndex([23, 2, 3, 4, 5]));	// [2, 3, 4, 23, 5]