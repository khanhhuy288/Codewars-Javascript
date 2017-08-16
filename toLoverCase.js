String.prototype.toLoverCase = function(){
	var love = 'LOVE';
	return this.replace(/[a-z]/gi, c => love[(c.toLowerCase().charCodeAt() - 97) % 4]);
};

console.log('Hello World!'.toLoverCase());	// ELEEV VVOEE!