function sum() {
  return [...arguments].reduce((sum, x) => sum + x, 0);
}

console.log(sum(1, 2, 3)); // => 6
console.log(sum(8, 2)); // => 10
console.log(sum(1, 2, 3, 4, 5)); // => 15