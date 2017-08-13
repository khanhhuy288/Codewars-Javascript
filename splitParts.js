var splitInParts = function(s, partLength){
  var res = ''; 
  for (var i = 0, m = s.length; i < m; i += partLength) {
  	res += s.slice(i, i + partLength) + ' ';
  }
  return res.slice(0, -1);
};

console.log(splitInParts("supercalifragilisticexpialidocious", 3));	// "sup erc ali fra gil ist ice xpi ali doc iou s"
console.log(splitInParts("HelloKata", 1)); 	// "H e l l o K a t a"
console.log(splitInParts("HelloKata", 9));	// "HelloKata"