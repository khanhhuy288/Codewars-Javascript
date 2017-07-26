function mostFrequentItemCount(collection) {
  return collection.length != 0 ? Math.max(...collection.map(num => collection.filter(x => x == num).length)) : 0;
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));	// 5