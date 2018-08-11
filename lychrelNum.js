function howManyIterationsNeeded (num, maxIter = 23){
  console.log(arguments)
	var i = 1;
	do {
		num = num + +String(num).split('').reverse().join('');
		if (isPalindrome(num)) {
			return i; 
		}
		i++;
	} while (i <= maxIter);

	return null;
}

function isPalindrome(num) {
	return num == String(num).split('').reverse().join('');
}

console.log(howManyIterationsNeeded(12));			// 1 
console.log(howManyIterationsNeeded(55));			// 2 
console.log(howManyIterationsNeeded(196));			// null 
console.log(howManyIterationsNeeded(385));			