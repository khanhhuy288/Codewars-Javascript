const divisions = (n, divisor) => {
  var res = 0; 
  while (n >= divisor) {
    n = Math.floor(n / divisor); 
    res++;
  }
  return res;
};

console.log(divisions(6, 2));	//  2
console.log(divisions(100, 2));	//  6
