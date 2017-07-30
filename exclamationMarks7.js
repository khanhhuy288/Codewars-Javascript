function remove(s){
  	return s.split(' ').filter(word => (word.match(/!/g) || []).length != 1).join(' ');
}

console.log(remove("Hi!")); 			// ""
console.log(remove("Hi! Hi!")); 			// ""
console.log(remove("Hi! Hi! Hi!")); 			// ""
console.log(remove("Hi Hi! Hi!")); 			// "Hi"
console.log(remove("Hi! !Hi Hi!")); 			// ""
console.log(remove("Hi! Hi!! Hi!")); 			// "Hi!!"
console.log(remove("Hi! !Hi! Hi!")); 			// "!Hi!"