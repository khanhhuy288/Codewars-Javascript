function diagonalSum(matrix){
  var result = 0; 
  matrix.forEach(function (row, i) {
    result += row[i];
  });
  return result; 
}

console.log(diagonalSum([[12]])); 	// 12
console.log(diagonalSum([[1, 2], [3, 4]])); 	// 5
console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); 	// 15
console.log(diagonalSum([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])); 	// 34