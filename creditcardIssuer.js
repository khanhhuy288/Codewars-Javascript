function getIssuer(number) {
	var num = String(number);
  	return /^(34|37).*$/.test(num) && num.length == 15 ? 'AMEX' :
  			/^6011.*$/.test(num) && num.length == 16 ? 'Discover' : 
  			/^(51|52|53|54|55).*$/.test(num) && num.length == 16 ? 'Mastercard' : 
  			/^4.*$/.test(num) && (num.length == 13 || num.length == 16) ? 'VISA' :
  			'Unknown';
}

console.log(getIssuer(4111111111111111)); // 'VISA'
console.log(getIssuer(378282246310005)); // 'AMEX'
console.log(getIssuer(9111111111111111)); // 'Unknown'