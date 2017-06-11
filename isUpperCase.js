String.prototype.isUpperCase = function () {
	return this == this.toUpperCase();
};


console.log("c".isUpperCase());  						// false
console.log("C".isUpperCase());  						// true
console.log("hello I AM DONALD".isUpperCase());  		// false
console.log("HELLO I AM DONALD".isUpperCase());  		// true
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase());  	// false
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase());  	// true