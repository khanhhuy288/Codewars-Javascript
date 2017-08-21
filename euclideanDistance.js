function euclideanDistance(point1, point2){
  return Math.round(Math.sqrt(point1.reduce((sum, e, i) => sum + Math.pow(e - point2[i], 2), 0)) * 100) / 100;
}

let p1 = [-1], p2 = [2];
console.log(euclideanDistance(p1, p2));		//  3
[p1,p2] = [[-1,2],[2,4]];
console.log(euclideanDistance(p1, p2));		// 3.61
[p1,p2] = [[-1,2,5],[2,4,9]];
console.log(euclideanDistance(p1, p2));		// 5.39

