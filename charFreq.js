function charFreq(message) {
	var res = {};
  	var chars = [...new Set([...message])];
  	for (var i = 0, m = chars.length; i < m; i++) {
  		res[chars[i]] = message.match(new RegExp(`[${chars[i]}]`, 'g')).length;
  	}
  	return res;
}

console.log(charFreq("I like cats?"));