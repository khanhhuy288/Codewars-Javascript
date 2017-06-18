var hotpo = function(n){
    switch(true) {
    	case n <= 1: return 0;
    	case n % 2 === 0: return hotpo(n/2) + 1;
    	default: return hotpo(3*n + 1) + 1;
    }
};

// tail recursion
var hotpo1 = function(n, acc = 0) {
  if (n <= 1) {
    return acc;
  } else {
    return hotpo(n%2 === 0 ? n/2 : 3*n+1, acc+1);
  }
};

console.log(hotpo(2346));			// 120
