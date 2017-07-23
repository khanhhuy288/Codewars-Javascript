function listToArray(list) {
  var result = [];
  result.push(list.value);
  if (list.next !== null)
  	result = result.concat(listToArray(list.next));
  return result;
}

var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
var list2 = {value: "foo", next: {value: "bar", next: null}};

console.log((listToArray(list1)));		// [1, 2, 3]
console.log((listToArray(list2)));		// ["foo", "bar"]