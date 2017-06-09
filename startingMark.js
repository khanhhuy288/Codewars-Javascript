function startingMark(bodyHeight){
  // Remember: Body height of 1.52 m --> starting mark: 9.45 m
  //           Body height of 1.83 m --> starting mark: 10.67 m
  var guideHeight1 = 1.52; 
  var guideMark1 = 9.45;
  var guideHeight2 = 1.83; 
  var guideMark2 = 10.67;
  var change = (guideMark2-guideMark1) / (guideHeight2-guideHeight1);
  var result = guideMark1 + (bodyHeight-guideHeight1) * change;
  return Math.round(result * 100) / 100;
}

console.log(startingMark(1.52));		//  9.45
console.log(startingMark(1.83));		//  10.67
console.log(startingMark(1.22));		//  8.27
console.log(startingMark(2.13));		//  11.85