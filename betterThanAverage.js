function betterThanAverage(classPoints, yourPoints) {
  	var class_avg = classPoints.concat(yourPoints).reduce((sum, x) => sum + x) / (classPoints.length + 1);
  	return yourPoints > class_avg;
}

console.log(betterThanAverage([2, 3], 5));		// true

my_array = [1, 2]; 
console.log(my_array);
my_array[0] = 2;
my_array[1] = 1;
console.log(my_array);













