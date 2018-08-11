function nextHappyYear(year){
   while (year <= 9012) {
   		year++; 
   		if (new Set(String(year)).size == 4) {
   			return year;
   		}
   } 
}

console.log(nextHappyYear(1001));		// 1023
console.log(nextHappyYear(1123));		// 1203
console.log(nextHappyYear(2001));		// 2013
console.log(nextHappyYear(2334));		// 2340
console.log(nextHappyYear(3331));		// 3401