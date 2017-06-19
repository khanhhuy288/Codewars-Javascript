function padIt(str,n){
	return '*'.repeat(Math.ceil(n/2)) + str + '*'.repeat(n - Math.ceil(n/2));  
}

console.log(padIt("a",1));					// "*a"
console.log(padIt("a",2));					// "*a*"
console.log(padIt("a",3));					// "**a*"
console.log(padIt("a",4));					// "**a**"
console.log(padIt("a",5));					// "***a**"