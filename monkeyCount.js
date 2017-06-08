function monkeyCount(n) {
	var result = [];
	for (var i = 1; i < n + 1; i++) {
		result.push(i);
	}
	return result;
}

function monkeyCount1(n) {
  for (var i = 0, arr = []; i < n; arr.push(++i));
  return arr;
}

console.log(monkeyCount1(10));