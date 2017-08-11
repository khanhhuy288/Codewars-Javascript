function numberJoy(n) {
    var sum = String(n).split('').reduce((a, b) => a + (+b), 0); 
    var sumReversed = String(sum).split('').reverse().join('');
    return sum * sumReversed == n;
}

console.log(numberJoy(1729));	// true