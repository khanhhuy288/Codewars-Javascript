function Circular () {
  this.value = "Hello World";
  this.self = this;
}

var circular = new Circular();
var value = circular.self.self.self.self.value; // 'Hello World'