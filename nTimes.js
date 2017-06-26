Number.prototype.times = function (fun) {
	for (var i = 0; i < this; i++) {
		fun(i);
	}
};

(6).times(i => console.log('hello ' + i));