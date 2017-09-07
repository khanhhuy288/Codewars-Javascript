function histogram(results) {
	var output = '';
  	for (var i = results.length - 1; i >= 0; i--) {
  		var side = results[i];
  		output += `${i+1}|${'#'.repeat(side)}${side !== 0 ? ' ' + side : ''}\n`;
  	}	
  	return output;
}

const histogram1 = r => r.reduce((r, x, i) => (i+1)+'|'+(x ? '#'.repeat(x)+' '+x : '')+'\n'+r, '');
// 6|##### 5
// 5|
// 4|# 1
// 3|########## 10
// 2|### 3
// 1|####### 7
console.log(histogram([7,3,10,1,0,5]));

