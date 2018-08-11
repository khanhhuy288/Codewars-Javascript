function count(array){
  return array.reduce(function (stack, value) {
    return stack[value] ? stack[value]++ : stack[value] = 1, stack;
  }, {});
}

console.log(count(['a', 'a', 'b', 'b', 'b'])); // { 'a': 2, 'b': 3 }