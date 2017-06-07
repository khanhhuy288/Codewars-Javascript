function  calculateAge(birth, year) {
	var age = year - birth;
	switch(true){
		case age === 0: return "You were born this very year!";
		case age === 1: return "You are 1 year old."; 
		case age === -1: return "You will be born in 1 year."; 	
		case age > 0:  return "You are " + age + " years old.";
		case age < 0:  return "You will be born in "+ Math.abs(age) + " years.";
		default: return "Something's wrong.";
	}
}

function  calculateAge1(m, n) {
  if(m == n) return 'You were born this very year!';
  var year = Math.abs(m-n) == 1 ? 'year' : 'years';
  if(m < n) return "You are "+(n-m)+' '+year+' old.';
  if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
}

console.log(calculateAge1(2012, 2016));		// "You are 4 years old."
console.log(calculateAge1(1989, 2016));		// "You are 27 years old."
console.log(calculateAge1(2000, 2090));		// "You are 90 years old."
console.log(calculateAge1(2000, 1990));		// "You will be born in 10 years."
console.log(calculateAge1(3400, 3400));		// "You were born this very year!"
console.log(calculateAge1(900, 2900));		// "You are 2000 years old."
console.log(calculateAge1(2010, 1990));		// "You will be born in 20 years."
console.log(calculateAge1(2010, 1500));		// "You will be born in 510 years."
console.log(calculateAge1(2011, 2012));		// "You are 1 year old."
console.log(calculateAge1(2000, 1999));		// "You will be born in 1 year."
