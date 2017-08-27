function twoCount(n) {
  let ret = 0;
  while(n % 2 === 0) {
    ret++;
    n /= 2;
  }
  return ret;
}

console.log(twoCount(17280));
console.log(twoCount(84934656));