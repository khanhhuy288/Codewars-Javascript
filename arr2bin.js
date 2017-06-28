function arr2bin(arr){
	return arr.reduce((sum, x) => sum + (typeof x == 'number' ? x : 0), 0).toString(2);
}

console.log(arr2bin([1,2])); 							//"11"
console.log(arr2bin([1,2,3,4,5])); 						//"1111"
console.log(arr2bin([1,10,100,1000])); 					//"10001010111"
console.log(arr2bin([null]));							//"0"
console.log(arr2bin([true,true,false,15]));				//"1111"

