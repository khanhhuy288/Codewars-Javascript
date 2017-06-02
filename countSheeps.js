var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

function countSheeps(arrayOfSheeps) {
	var result = 0;
  	arrayOfSheeps.forEach(function (sheep) {
  		if (sheep === true)
  			result += 1;
  	});
  	return result;
}

function countSheeps1 (arrayOfSheeps) {
	return arrayOfSheeps.filter(Boolean).length;
}

console.log(countSheeps(array1)); 
console.log(countSheeps1(array1)); 