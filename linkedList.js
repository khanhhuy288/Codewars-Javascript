function listToArray(list) {
  var result = []; 

  
  return result;  
}

var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
var list2 = {value: "foo", next: {value: "bar", next: null}};

console.log((listToArray(list1)));		// [1, 2, 3]
console.log((listToArray(list2)));		// ["foo", "bar"]