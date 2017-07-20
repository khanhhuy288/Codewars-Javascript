var flatten = function (array){
  var result = []; 
  array.forEach(function (elem) {
    if (Array.isArray(elem)) {
      	result.push(...flatten(elem));
    } else {
      	result.push(elem);
    }
  });
  return result;
};

var deepFlatten = function (array){
  return array.reduce(function(r, e) {
    return Array.isArray(e) ? r.push(...deepFlatten(e)) : r.push(e), r;
  }, []);
};

console.log(deepFlatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]])); // [1, 2, 3, "a", "b", "c", 1, 2, 3]
console.log(flatten([1, 2, [3, 4]]));
console.log(flatten([]));