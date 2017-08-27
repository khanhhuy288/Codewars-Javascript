function freqSeq(str, sep) {
	var dict = [...new Set(str)].map(e => [e, [...str].filter(c => c == e).length]);
}

console.log(freqSeq('hello world', '-')); 	// => '1-1-3-3-2-1-1-2-1-3-1'
console.log(freqSeq('19999999',    ':'));	// => '1:7:7:7:7:7:7:7'
console.log(freqSeq('^^^**$',      'x'));	// => '3x3x3x2x2x1'