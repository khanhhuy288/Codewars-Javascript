function last(list){
  	if (typeof list == "number" || arguments.length > 1) {
    	var list_arr = Array.prototype.slice.call(arguments);
    	return list_arr.slice(-1)[0];
  	}
  	return list.slice(-1)[0];
}

function last1(list){
  	var last = arguments[arguments.length - 1];
  	return last[last.length - 1] || last;
}

console.log("Result: " + last( [1,2,3,4] ) );			// => 4
console.log("Result: " + last( "xyz" ));     			// => "z"
console.log("Result: " + last( 1,2,3,4 ));  			// => 4
console.log("Result: " + last( "a","b","c","z" ));  	// => "z"
console.log("Result: " + last( 5 ));  					// => 5

