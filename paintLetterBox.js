var paintLetterboxes = function(start, end) {
  var boxes = Array.from(new Array(end - start + 1), (x, i) => i + start);
  var str = boxes.map(x => '' + x).join('');
  return [...Array(10).keys()].map(n => (str.match(new RegExp(n, 'g')) || []).length);
};

console.log(paintLetterboxes(125, 132));	// [1,9,6,3,0,1,1,1,1,1]