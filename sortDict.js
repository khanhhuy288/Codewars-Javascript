function sortDict(dict){
	return Object.values(dict);
}

console.log(sortDict({1:3,2:2,3:1}));          // [[1,3],[2,2],[3,1]]
console.log(sortDict({1:2,2:4,3:6}));          // [[3,6],[2,4],[1,2]]

// strings as keys
console.log(sortDict({'A':2,'K':4,'Z':6}));          // [['Z',6],['K',4],['A',2]]

