function arrAdder(arr) {
	var result = '';
	for (var i = 0; i < arr[0].length; i++) {
		for (var j = 0; j < arr.length; j++) {
			result += arr[j][i];
		}
		result += ' ';
	}
	return result.trim();
}

function arrAdder(arr) {
 return arr[0].map((x,i) => arr.map(z => z[i]).join('')).join(' ');
}

console.log(arrAdder([ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ] ]));	// "Just Live Life Man");