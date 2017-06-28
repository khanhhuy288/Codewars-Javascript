function hello () {
	console.log("Hello");
}

var original = hello.toString();

hello.toString = function() {
  return 'blablabla';
};

var _originalToString = function(func) {
	return Function.prototype.toString.call(func);
};

console.log(original);
console.log(_originalToString(hello));