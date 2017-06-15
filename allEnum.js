function all( arr, func ){
  return arr.every(func);
}

var smallerThan9 = function (num) {
	return num < 9;
};

console.log(all([1,2,3,4,5], smallerThan9));