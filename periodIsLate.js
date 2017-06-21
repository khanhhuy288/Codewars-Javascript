function periodIsLate(last, today, cycleLength)
{
	var oneDay = 24*60*60*1000;
	var daysPassed = Math.round(Math.abs((today.getTime() - last.getTime())/(oneDay)));
	return daysPassed > cycleLength;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));		// false
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));		// true
