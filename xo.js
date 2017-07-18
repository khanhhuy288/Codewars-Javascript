function XO(str) {
	var ONum = str.match(/o/gi) || [];
	var XNum = str.match(/x/gi) || [];
    return ONum.length == XNum.length;
}


console.log(XO('xo'));				// true
console.log(XO("xxOo"));			// true
console.log(XO("xxxm"));			// false
console.log(XO("Oo"));				// false
console.log(XO("ooom"));			// false