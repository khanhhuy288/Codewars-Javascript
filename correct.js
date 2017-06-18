function correct(string)
{
	return string.split('').map(x => check(x)).join('');
}

function check (c) {
	switch (c) {
		case '5': return 'S'; 
		case '0': return 'O'; 
		case '1': return 'I';
		default: return c;
	}
}

correct1 = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S');s

console.log(correct("L0ND0N"));			// "LONDON"
console.log(correct("DUBL1N"));			// "DUBLIN"
console.log(correct("51NGAP0RE"));		// "SINGAPORE"
console.log(correct("BUDAPE5T"));		// "BUDAPEST"
console.log(correct("PAR15"));			// "PARIS"