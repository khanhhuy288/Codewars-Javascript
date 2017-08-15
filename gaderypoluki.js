function encode(str) {
    var codes = {g:'a', d:'e', r:'y', p:'o', l:'u', k:'i', a:'g', e:'d', y:'r', o:'p', u:'l', i:'k'};
    return str.replace(/[gaderypoluki]/gi, c => codes[c] || codes[c.toLowerCase()].toUpperCase());   
}

function decode(str) {
	return encode(str);
}

console.log(encode("ABCD"));          		// => GBCE 
console.log(encode("Ala has a cat") );		// => Gug hgs g cgt 
console.log(encode("gaderypoluki")); 		// => agedyropulik
console.log(decode("Gug hgs g cgt")); 		// => Ala has a cat 
console.log(decode("agedyropulik"));  		// => gaderypoluki
console.log(decode("GBCE"));          		// => ABCD