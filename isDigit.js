String.prototype.digit = function() {
  return this.match(/\d/) === null ? false : this.match(/\d/).length == this.length;
};

String.prototype.digit1 = function() {
  return /^\d$/.test(this);
};

console.log(''.digit());				// false
console.log('7'.digit());				// true
console.log(' '.digit());				// false
console.log('a'.digit());				// false
console.log('a5'.digit());				// false
console.log('14'.digit());				// false