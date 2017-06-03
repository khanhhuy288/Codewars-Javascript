/*jshint esversion: 6 */
function doubleChar(str) {
  return str.split("").map(function (char) {
  	return char.repeat(2);
  }).join("");
}

var doubleChar1 = (str) => str.split("").map(c => c + c).join("");

console.log(doubleChar1("String") 	);		// "SSttrriinngg"
console.log(doubleChar1("Hello World")); 	// "HHeelllloo  WWoorrlldd"
console.log(doubleChar1("1234!_ ")); 		// "11223344!!__  "