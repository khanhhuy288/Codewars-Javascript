var a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'},
    b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

const cannonsReady = (gunners) => {
	for (var prop in gunners) {
		if (gunners[prop] == 'nay')
			return 'Shiver me timbers!';
	}
	return 'Fire!';
};

console.log(cannonsReady(a));
console.log(cannonsReady(b));


