function validateWord(s) {
  return [...new Set(s.split(''))].map(x => s.match(new RegExp(x, 'gi')).length);
}

console.log(validateWord("abc!abc!"));		// true