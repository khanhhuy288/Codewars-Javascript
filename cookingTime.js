function cookingTime(eggs) {
  return 5 * Math.ceil(eggs / 8);
}

console.log(cookingTime(0)); // must return 0
console.log(cookingTime(5)); // must return 5
console.log(cookingTime(10)); // must return 10