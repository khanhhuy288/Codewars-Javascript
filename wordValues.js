function wordValue(a) {
  return a.map((e, i) => value(e) * (i + 1));
}

function value(word) {
	return [...word.replace(/\s/g, '')].map(c => c.charCodeAt() - (c != c.toUpperCase() ? 96 : 64)).reduce((a, b) => a + b, 0);
}

console.log(wordValue(["codewars","abc","xyz"]));		// [88,12,225] 
console.log(wordValue(["abc abc","abc abc","abc","abc"])); 		// [12,24,18,24] 
