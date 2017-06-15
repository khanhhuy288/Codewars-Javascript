function nextId(ids){
	// sort ids
	var sortedIds = ids.sort((a,b) => a - b);
	
	for (var i = 0; i <= sortedIds[ids.length - 1]; i++) {
		if (ids.indexOf(i) == -1)
			return i;
	}
}

function nextId(ids){
  const used = new Set(ids);
  for (let i = 0; i <= ids.length; i++) {
    if (!used.has(i)) return i;
  }
}


console.log(nextId([0,1,5,3,1]));						// 2
console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]));			// 11