function charConcat(string){
  var res = ''; 
  for (var i = 0, m = Math.floor(string.length/2); i < m; i++) {
  	res += string[i] + string[string.length - i - 1] + (i + 1);
  }
  return res;
}

console.log(charConcat("abcdef"));    // 'af1be2cd3'
console.log(charConcat("abc!def"));   // 'af1be2cd3' 