function cutIt(arr){
	var shortest = Math.min(...arr.map(x => x.length));
	return arr.map(x => x.slice(0, shortest));
}

console.log(cutIt(["ab","cde","fgh"])); 						// ["ab","cd","fg"]
console.log(cutIt(["abc","defgh","ijklmn"])); 					// ["abc","def","ijk"]
console.log(cutIt(["codewars","javascript","java"])); 			// ["code","java","java"]