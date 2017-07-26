function strongEnough(earthquake, age) {
  var magnitude = earthquake.reduce((pro, p) => pro * p.reduce((sum, s) => sum + s, 0), 1);
  var strength = 1000; 
  for (var i = 0; i < age; i++) {
  	strength -= strength * 1 / 100; 
  }
  return strength >= magnitude ? 'Safe!' : 'Needs Reinforcement!';
}

console.log(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 2));	// "Safe!"