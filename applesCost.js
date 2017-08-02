function apples(kilos, price) {
  var discount = kilos >= 1 ? Math.ceil(kilos / 2) * 5 : 0;
  discount = discount > 30 ? 30 : discount;
  return kilos * (price - price/100*discount);
}

console.log(apples(0.5, 2.98));			//  1.49
console.log(apples(1, 6.7));			//  6.365
console.log(apples(6, 2.75));			//  14.025