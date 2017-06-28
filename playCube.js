// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args
class Cube {
  	constructor (side = 0) {
  		this.side = Math.abs(side);
  	}

  	getSide () {
  		return this.side;
  	}

  	setSide (side) {
  		this.side = Math.abs(side); 
  	}
}

var c = new Cube(10);
console.log(c.getSide());            // 10
c = new Cube();
console.log(c.getSide());			// 0