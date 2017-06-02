// 348597 => [7,9,5,8,4,3]
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

result = digitize(348597);
console.log(result);