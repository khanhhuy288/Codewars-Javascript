function copyList(l){
	if (!Array.isArray(l)) {
		throw 'Argument Error';
	}
	return l.map(x => x);
}

t = [1,2,3,4];
tCopy = copyList(t);
t[1] += 5;
console.log(t); // [1,7,3,4]
console.log(tCopy); // [1,2,3,4]