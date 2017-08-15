function alphabetWar(fight) {
   	var leftPower = {w:4, p:3, b:2, s:1};
   	var rightPower = {m:4, q:3 , d:2, z:1};
   	var left = 0; 
   	var right = 0; 
   	[...fight].forEach(function (c) {
   		if (c in leftPower) {
   			left += leftPower[c];
   		} else if (c in rightPower) {
   			right += rightPower[c];
   		}
   	});
   	return left > right ? "Left side wins!" : left < right ? "Right side wins!" : "Let's fight again!";
}

console.log(alphabetWar("z"));  						// "Right side wins!" 
console.log(alphabetWar("zdqmwpbs"));  				// "Let's fight again!" 
console.log(alphabetWar("zzzzs")); 					// "Right side wins!" 
console.log(alphabetWar("wwwwww")); 					// "Left side wins!" 