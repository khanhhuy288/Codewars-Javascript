// function alan(x){
// 	var dict = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'];
// 	return dict.every(e => x.includes(e));
// }

const stops = RegExp.prototype.test.bind(/Rejection|Disappointment|Backstabbing Central|Shattered Dreams Parkway/);
function alan(x){
  return [...new Set(x.filter(stops))].length===4?'Smell my cheese you mother!':'No, seriously, run. You will miss it.';
}
