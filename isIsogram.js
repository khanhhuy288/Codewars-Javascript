// function isIsogram(str){
//   var letters = new Set(str.toLowerCase().match(/[a-z]/g) || []);
//   return letters.size == str.length;
// }

function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}

console.log(isIsogram("Dermatoglyphics"));		// true 
console.log(isIsogram("isogram"));				// true 
console.log(isIsogram("aba"));					// false
console.log(isIsogram("moOse"));				// false  
console.log(isIsogram("isIsogram"));			// false 
console.log(isIsogram(""));						// true 