function howMuchILoveYou(nbPetals) {
	var loveMeter = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
	return loveMeter[(nbPetals - 1) % loveMeter.length];
}

console.log(howMuchILoveYou(7)); 			// "I love you"
console.log(howMuchILoveYou(3)); 			// "a lot"
console.log(howMuchILoveYou(6)); 			// "not at all"