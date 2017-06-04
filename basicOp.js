function basicOp(operation, value1, value2){
 	switch(operation){
    case "+": 
    	return value1 + value2;
    case "-": 
    	return value1 - value2;
    case "*": 
    	return value1 * value2;
    case "/": 
    	return value1 / value2;
	}
}

function basicOp1(o, a, b) {
  return eval(a+o+b);
}

console.log(basicOp1('+', 4, 7));         // Output: 11
console.log(basicOp1('-', 15, 18));       // Output: -3
console.log(basicOp1('*', 5, 5));         // Output: 25
console.log(basicOp1('/', 49, 7));        // Output: 7