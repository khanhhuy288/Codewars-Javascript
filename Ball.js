class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

var Ball1 = function(ballType) {
  this.ballType = ballType || "regular";
};

ball1 = new Ball1();
ball2 = new Ball1("super");

console.log(ball1.ballType);     //=> "regular"
console.log(ball2.ballType);     //=> "super"

console.log('abc'.slice(-1));