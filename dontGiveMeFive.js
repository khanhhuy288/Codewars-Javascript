function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++;
    }
  }
  return count;
}

console.log(dontGiveMeFive(1,9)); // 8
console.log(dontGiveMeFive(4,17)); // 12
