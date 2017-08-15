function vertMirror(strng) {
    return strng.split('\n').map(e => e.split('').reverse().join('')).join('\n');
}
function horMirror(strng) {
    return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
    return fct(s);
}

var s = "abcd\nefgh\nijkl\nmnop";
console.log(vertMirror(s)); 	// "dcba\nhgfe\nlkji\nponm"
console.log(horMirror(s));		// "mnop\nijkl\nefgh\nabcd"