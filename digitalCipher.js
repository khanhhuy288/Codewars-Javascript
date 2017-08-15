function encode(str,  n){
	var nLength = String(n).length;
  	return [...str].map((e, i) => (e.charCodeAt() - 96) + +String(n)[i % nLength]);
}

console.log(encode("scout",1939)); 			// [ 20, 12, 18, 30, 21] 
console.log(encode("masterpiece",1939)); 		// [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
