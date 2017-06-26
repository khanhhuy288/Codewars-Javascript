function hello () {
	console.log("Hello");
}

hello.toString = function() {
  return 'blablabla';
};

var _originalToString = function(func) {
  return Function.prototype.toString(this);
};

console.log(_originalToString(hello()));