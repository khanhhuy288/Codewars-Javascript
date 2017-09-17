function babel(height) {
  var output = ''; 
  for (var i = 0, j = height - 1, k = 1; i < height; i++) {
  	output += (' '.repeat(j) + 'o'.repeat(k) + '\n').repeat(3);
  	k += 2;
  	j--;
  }
  return output.slice(0, -1);
}

console.log(babel(0)); // ''
console.log(babel(1)); 
// o
// o
// o
console.log(babel(2));
//  o
//  o
//  o
// ooo
// ooo
// ooo
console.log(babel(3));
//   o
//   o
//   o
//  ooo
//  ooo
//  ooo
// ooooo
// ooooo
// ooooo