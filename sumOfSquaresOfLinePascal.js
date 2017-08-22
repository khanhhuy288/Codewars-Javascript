function easyLine(n) {
    var res = [1]; 
    for (var i = 0; i < n; i++) {
    	res.push(res[i] * (n-i) / (i+1));
    }
    return Math.round(Math.log(res.reduce((a, b) => a + b*b, 0)));
}

console.log(easyLine(4));