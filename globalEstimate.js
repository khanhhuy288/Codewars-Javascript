const globalEstimate = e =>  e.reduce(([s1,_,s2], [a,b])=> [s1+a, (s1+s2+a+b)/2, s2+b], [0,0,0]);

console.log(globalEstimate([[1, 3], [1, 4], [1, 5]]));	// [3, 7.5, 12]]