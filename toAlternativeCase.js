String.prototype.toAlternatingCase = function () {
	var result = '';
 	for (var i = 0; i < this.length; i++) {
 		result += (this.charAt(i) === this.charAt(i).toLowerCase()) ? this.charAt(i).toUpperCase() : this.charAt(i).toLowerCase();
  	}
  	return result;
};

String.prototype.toAlternatingCase1 = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('');
};

console.log("Hello World".toAlternatingCase());
