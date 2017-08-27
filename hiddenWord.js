function hiddenWord(num) {
  var dict = {'6':'a', '1':'b', '7':'d', '4':'e', '3':'i', '2':'l', '9':'m', '8':'n', '0':'o', '5':'t'}; 
  return String(num).replace(/./g, n => dict[n]);
}

console.log(hiddenWord(637));			// "aid"
console.log(hiddenWord(7415));			// "debt"
console.log(hiddenWord(49632));			// "email"
console.log(hiddenWord(942547));		// "melted"