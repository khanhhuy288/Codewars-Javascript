var any = Function.prototype.call.bind(Array.prototype.some);

console.log(any([1, 3, 4, 5], (x => x > 6)));