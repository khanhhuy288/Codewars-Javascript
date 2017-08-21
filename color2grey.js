var color2grey = function (image) {
  return image.map(a => a.map(b => b.map(c => Math.round(b.reduce((m, n) => m + n, 0)/3))));
};

var ic = [
			[[123,231,12],[56,43,124]],
			[[78,152,76],[64,132,200]]
		] ;
var ig = [[[122,122,122],[74,74,74]],[[102,102,102],[132,132,132]]] ;

console.log(color2grey(ic));