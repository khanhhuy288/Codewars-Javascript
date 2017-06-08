function removeChar(str){
	var new_str = '';
  	for (var i = 1; i < str.length - 1; i++) {
  		new_str += str[i];
  	}
  	return new_str;
}

const removeCha1 = (str) => str.replace(/^.|.$/g, '');
const removeChar2 = str => str.slice(1,-1);


console.log(removeChar('eloquent'));		// 'loquen'
console.log(removeChar('country'));			// 'ountr'
console.log(removeChar('person'));			// 'erso'
console.log(removeChar('place'));			// 'lac'