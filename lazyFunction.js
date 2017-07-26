var make_lazy = function (fn) {
	return fn.bind.apply(fn, arguments);
};

function add (a, b) {
  return a + b;
}	

var lazy_value = make_lazy(add, 2, 3);

console.log(lazy_value());


