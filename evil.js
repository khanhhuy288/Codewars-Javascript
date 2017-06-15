function evil(n) {
  return `It\'s ${n.toString(2).match(/1/g).length % 2 == 0 ? 'Evil' : 'Odious'}`;
}

console.log(evil(1)); 				// "It's Odious!"
console.log(evil(2)); 				// "It's Odious!"
console.log(evil(3)); 				// "It's Evil!"