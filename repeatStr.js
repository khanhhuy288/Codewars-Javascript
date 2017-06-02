function repeatStr (n, s) {
	var result = ""; 
  	for (var i = 0; i < n; i++) {
  		result += s;
  	}
  	return result;
}

function repeatStr1 (n, s){
	return s.repeat(n);
}

console.log(repeatStr(6, "I")); // "IIIIII"
console.log(repeatStr(5, "Hello")); // "HelloHelloHelloHelloHello"

console.log(repeatStr1(6, "I")); // "IIIIII"
console.log(repeatStr1(5, "Hello")); // "HelloHelloHelloHelloHello"