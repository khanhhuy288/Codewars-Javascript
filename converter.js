function converter (mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  return Math.round(1.609344 * mpg / 4.54609188 * 100) / 100;   
}

console.log(converter(10));		// 3.54
console.log(converter(20));		// 7.08
console.log(converter(30));		// 10.62