function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function () {
  this.value += 1;
};

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
};