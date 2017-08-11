function f(x, cc) { 
	var values = []; 
  for (var prop in cc) {
    values.push(cc[prop]);
  }
	for (var i = 0; i < values.length; i++) {
		if (x == values[i])
			return values[(i + 1) % values.length];
	}
}

const f2 = (x,{a,b,c}) => ({[a]:b,[b]:c,[c]:a})[x];

console.log(f2( 3, { a:3, b:4, c:5 } ));		// 4 
console.log(f2( 4, { a:3, b:4, c:5 } ));		// 5 
console.log(f2( 5, { a:3, b:4, c:5 } ));		// 3 