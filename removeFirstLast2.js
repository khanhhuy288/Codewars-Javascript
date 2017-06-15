function array(str){
  return str.replace(/ /g, '').split(',').slice(0, -1).slice(1).join(' ') || null;
}

console.log(array(''));					// null
console.log(array('1')); 				// null
console.log(array('1, 3')); 			// null
console.log(array('1,2,3')); 			// '2'