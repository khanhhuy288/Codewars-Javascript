var palindromeChainLength = function(n) {
	if (isPalindrome(n))
		return 0; 
	var res = 0; 
	do {
		n = n + +reverseNum(n);
		res++;
	} 
	while (!isPalindrome(n));
	return res;
};

var isPalindrome = function(n) {
	return n == reverseNum(n);
};

var reverseNum = function(n) {
	return String(n).split('').reverse().join('');
}

console.log(palindromeChainLength(87)==4); // true