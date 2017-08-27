function maxPossibleScore(obj, arr) {
  var res = 0;
  for (var prop in obj) {
  	res += obj[prop] * (arr.includes(prop.toString()) ? 2 : 1);
  }
  return res;
}

function maxPossibleScore1(obj, arr) {
  return Object
    .keys(obj)
    .reduce((acc,key) => {
      const val = obj[key];
      return acc + (arr.toString().includes(key) ? val * 2 : val);
    }, 0);
}

console.log(maxPossibleScore({"a": 1}, []));		// 1
console.log(maxPossibleScore({"a": 1}, ["a"]));		// 2
console.log(maxPossibleScore({"a": 1, "b": 14}, ["b"]));		// 29
console.log(maxPossibleScore({"a": 1, "b": 2, "c": 4}, ["a", "b", "c"]));	// 14
console.log(maxPossibleScore({"a": 2, "b": 5, "c": 8}, ["c"]));	// 23