var Ghost = function() {
	var colors = ["white", "yellow", "purple", "red"];
	this.color = colors[Math.floor(Math.random() * colors.length)];
};

ghost = new Ghost();
console.log(ghost.color); //=> "white" or "yellow" or "purple" or "red"