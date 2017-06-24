function isToday(date) {
  return date.toDateString() == (new Date()).toDateString();
}

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

console.log(isToday(new Date()));							// true
console.log(isToday(tomorrow));								// false
console.log(isToday(yesterday));							// false