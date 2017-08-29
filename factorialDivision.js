// - n and d will be positive integers, and also n > d. No need to check any of that
function factorialDivision(n, d) {
  var res = 1;
  for (var i = 0, m = n - d; i < m; i++) {
    res *= n; 
    n--;
  }
  return res;
}