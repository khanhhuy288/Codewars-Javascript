function getRectangleString(width, height) {
  var result = '*'.repeat(width) + '\n';
  for (var i = 0; i < height - 2; i++) {
  	result += '*' + ' '.repeat(width - 2) + '*\n';
  } 
  return result + '*'.repeat(width) + '\n';
}

console.log(getRectangleString(4, 3));		// "***\r\n" + "* *\r\n" + "***\r\n"