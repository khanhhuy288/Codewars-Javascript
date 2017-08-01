var parseNumbers = function(intStrs) {
  return intStrs.map(x => parseInt(x));
};

console.log(parseNumbers([ '21.12', '49.94', '50.50' ]));