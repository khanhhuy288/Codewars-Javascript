function tripleTrouble(one, two, three){
	var result = [];
	for (var i = 0; i < arguments[0].length; i++) {
		for (var j = 0; j < 3; j++) {
			result += arguments[j][i]; 
		}
	}
	return result; 
}

function tripleTrouble1(one, two, three){
  var m = '';
  for (var i = 0; i < one.length; i++){
    m += one[i] + two[i] + three[i];
  }
  return m;
 }

console.log(tripleTrouble("this","test","lock")); 				// "ttlheoiscstk"
console.log(tripleTrouble("aa","bb","cc")); 				// "abcabc"
console.log(tripleTrouble("Bm", "aa", "tn")); 				// "Batman"
console.log(tripleTrouble("LLh","euo","xtr"));			// "LexLuthor"