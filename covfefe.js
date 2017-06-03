// Covfefe
// Your are given a string. You must replace the word(s) coverage by covfefe, 
// however, if you don't find the word coverage in the string, you must add it
// at the end of the string with a leading space.
// For the languages where the string is not immutable (such as ruby), don't 
// modify the given string, otherwise this will break the test cases.
function covfefe(str){
	var words = str.split(" ");
	// not contain "coverage"
	if (words.indexOf("coverage") === -1) {
		words.push("covfefe");
		return words.join(" ");
	}
	// contain "coverage"
	for (var i = 0; i < words.length; i++) {
		if (words[i] === "coverage")
			words[i] = "covfefe";
	}
	return words.join(" ");
}
	
console.log(covfefe("coverage")); 			// "covfefe"
console.log(covfefe("coverage coverage"));	// "covfefe covfefe"
console.log(covfefe("nothing"));			// "nothing covfefe"
console.log(covfefe("double space "));		// "double space  covfefe"
console.log(covfefe("covfefe"));			// "covfefe covfefe"


