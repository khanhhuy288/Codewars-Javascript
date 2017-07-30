function maxRot(n) {
  var nums = [n];
  for (var i = 0; i < String(n).length - 1; i++) {
  	n = String(n).slice(0, i) + rotateLeft(String(n).slice(i));
  	nums.push(n);
  }
  return nums;
}

function rotateLeft(n) {
  return n.slice(1) + n.charAt(0);
}

console.log(maxRot(56789)); // 68957