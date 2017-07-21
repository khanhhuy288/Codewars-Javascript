function vampire_test(a, b){
  return sortStr(a + '' + b) == sortStr(a * b + '');
}

function sortStr(v){ return v.split('').sort().join(''); }

console.log(vampire_test(21, 6));




