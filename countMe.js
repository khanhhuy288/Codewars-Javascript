function countMe(data){
	return /^\d+$/.test(data) ? data.match(/([0-9])\1*/g).reduce((a, b) => a + b.length + b[0], '') : '';
}

console.log(countMe('1123'));				// 211213'
console.log(countMe('1'));					// 11'
console.log(countMe('11'));					// 21'
console.log(countMe('a')); 					// ''
console.log(countMe('a123')); 				// ''
console.log(countMe('21'));					// 1211'
console.log(countMe('1211'));				// 111221'
console.log(countMe('12322212223443'));		// 111213321132132413'
console.log(countMe('')); 					// ''
console.log(countMe('123a')); 				// ''