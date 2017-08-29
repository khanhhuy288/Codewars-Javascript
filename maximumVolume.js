function maximumVolume(n){
  let s = Math.round(n * 1/6), num = n - 2 * s;
  return s * num * num;
}

console.log(maximumVolume(5));      // 9
console.log(maximumVolume(6));      // 16
console.log(maximumVolume(7));      // 25
console.log(maximumVolume(8));      // 36
console.log(maximumVolume(9));      // 50
console.log(maximumVolume(10));     //  72
console.log(maximumVolume(20));     //  588