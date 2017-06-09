class Player {
  constructor(name) {
  	this.name = name;
  }
}

function duckDuckGoose(players, goose) {
	var index = goose - 1; 
	return players[index % players.length].name;
}

var ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
var players = ex_names.map((n) => new Player(n));

console.log(duckDuckGoose(players, 1));			// "a"
console.log(duckDuckGoose(players, 3));			// "c"
console.log(duckDuckGoose(players, 10));		// "z"
console.log(duckDuckGoose(players, 20));		// "z"
console.log(duckDuckGoose(players, 30));		// "z"
console.log(duckDuckGoose(players, 18));		// "g"
console.log(duckDuckGoose(players, 28));		// "g"
console.log(duckDuckGoose(players, 12));		// "b"
console.log(duckDuckGoose(players, 2));			// "b"
console.log(duckDuckGoose(players, 7));			// "f"