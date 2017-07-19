function solution(pairs){
  var result = []; 
  for (var x in pairs) {
  	result.push(`${x} = ${pairs[x]}`);
  }
  return result.join(',');
}

solution({a: 1, b: '2'}); 			// should return "a = 1,b = 2"