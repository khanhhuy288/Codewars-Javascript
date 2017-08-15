function battle(x, y) {
	var xPower = power(x); 
	var yPower = power(y);
	return xPower > yPower ? x : xPower < yPower ? y : 'Tie!';
}

function power(word) {
	return [...word].map(c => c != c.toUpperCase() ? (c.charCodeAt() - 96) / 2 : c.charCodeAt() - 64).reduce((a, b) => a + b, 0);
}

console.log(battle("One", "Two")); 			// "Two"
console.log(battle("One", "Neo")); 			// "One"
console.log(battle("One", "neO")); 			// "Tie!"
console.log(battle("Foo", "BAR")); 			// "Tie!"
console.log(battle("Four", "Five"));	 		// "Four"