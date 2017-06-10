function remove(s){
	var chars = s.split('');
	if (chars[chars.length - 1] == '!')  
		chars.pop();
	return chars.join('');
}

const remove1 = (s) => s.replace(/!$/, '');

console.log(remove1("Hi!")); 				// "Hi"
console.log(remove1("Hi!!!")); 				// "Hi!!"
console.log(remove1("!Hi"));					// "!Hi"
console.log(remove1("!Hi!")); 				// "!Hi"
console.log(remove1("Hi! Hi!")); 			// "Hi! Hi"
console.log(remove1("Hi"));					// "Hi"

