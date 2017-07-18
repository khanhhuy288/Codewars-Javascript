function squareDigits(num){
  return parseInt(String(num).split('').map(x => x * x).join(''));
}

console.log(squareDigits(9119));			// 811181