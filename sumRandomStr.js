function sumFromString(str){
  return (str.match(/\d+/g) || []).reduce((a,b) => a + parseInt(b), 0);
}

console.log(sumFromString("In 2015, I want to know how much does iPhone 6+ cost?")); 	// 2021
console.log(sumFromString("1+1=2")); 	// 4
console.log(sumFromString("e=mc^2") );	// 2