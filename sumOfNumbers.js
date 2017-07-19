function GetSum(a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);
  var result = 0;
  for (var i = min; i <= max; i++) {
    result += i;
  }
  return result;
}