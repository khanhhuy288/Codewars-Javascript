function removeEveryOther(arr){
	for(var i = arr.length - 1; i > 0; i--) {
    	if(i % 2 !== 0) 
       		arr.splice(i, 1);
	}
	return arr;
}

function removeEveryOther1(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));					// ['Hello', 'Hello Again'])
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));						// [1, 3, 5, 7, 9])
console.log(removeEveryOther([[1, 2]]));											// [[1, 2]])
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]));						// [['Goodbye']])
console.log(removeEveryOther([])); 													// [])