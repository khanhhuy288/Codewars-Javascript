function pickIt(arr){
	var odd=[], even=[];
	for (var i = 0; i < arr.length; i++) {
		arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
	}
 	return [odd,even];
}

function pickIt1 (arr) {
  
  var odd = [], even =[];
  for (var x of arr) {
      ((x % 2) ? odd : even).push(x);    
  }
  return [odd, even];
}

console.log(pickIt1([1,2])	);				// [[1],[2]]
console.log(pickIt1([1,2,3]));				// [[1,3],[2]]
console.log(pickIt1([3,2,1]));				// [[3,1],[2]]
console.log(pickIt1([10,20,30]));			// [[],[10,20,30]]
console.log(pickIt1([11,21,31]));			// [[11,21,31],[]]
console.log(pickIt1([8,1,5,4,6,1,1]));		// [[1,5,1,1],[8,4,6]]