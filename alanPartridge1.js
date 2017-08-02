function part(x){
	var dict = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad'];
	var times = 0;
	x.forEach(function (e) {
		if (dict.includes(e)) {
			times++;
		}
	});
	return times !== 0 ? 'Mine\'s a Pint' + '!'.repeat(times) : 'Lynn, I\'ve pierced my foot on a spike!!';
}

console.log(part(['Grouse', 'Partridge', 'Pheasant'])); // 'Mine\'s a Pint!'