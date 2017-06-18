function countWords(str) {
  return str != false ? str.replace(/\s+/g, ' ').trim().split(' ').length : 0;
}

function countWords1(str) {
  return (str.match(/[^\s]+/g) || []).length;
}

const countWords2 = str => str.split(/\S+/).length - 1;

console.log(countWords("Hello")); 				// returns 1 as int
console.log(countWords("Hello, World!")); 		// returns 2
console.log(countWords("No results for search term `s`")); 	// returns 6
console.log(countWords(" Hello")); 				// returns 1
console.log(countWords("       "));					// retunrs 0