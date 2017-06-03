function findNeedle(haystack) {
  for (var i = 0; i < haystack.length; i++) {
  	if (haystack[i] === "needle") {
  		return "found the needle at position " + i; 
  	}
  }
}


var result = findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']);	// 'found the needle at position 5'
console.log(result);