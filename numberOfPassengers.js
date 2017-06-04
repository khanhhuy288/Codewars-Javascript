var number = function(busStops){
  return busStops.map(elem => elem.reduce((a, b) => a - b)).reduce((a, b) => a + b); 
};

// get the difference at each bustop and sum all the differences together
const number1 = busStops => busStops.map(elem => elem.reduce((a, b) => a - b)).reduce((a, b) => a + b); 

console.log(number1([[10,0],[3,5],[5,8]]));		// 5
console.log(number1([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));		// 17
console.log(number1([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));		// 21