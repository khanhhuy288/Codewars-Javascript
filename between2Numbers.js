function range(startNum, endNum) {  
 var result = []; 
 for (var i = startNum + 1; i < endNum; i++)
   result.push(i);
  return result;
}

console.log(range(2,9));		// [3,4,5,6,7,8]