function flipNumber(n) {
  var res = n;
  for (var i = 0, m = n.length - 1; i < m; i++) {
  	res = res.slice(0,i) + reverseNum(res.slice(i));
  }
  return res;
}

function reverseNum(n) {
  return n.split('').reverse().join('');
}

console.log(flipNumber("012345"));		// "504132"