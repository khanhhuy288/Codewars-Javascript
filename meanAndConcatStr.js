function mean(lst){
  return [lst.filter(e => /\d/.test(e)).reduce((a, b) => a + parseInt(b), 0)/10, lst.filter(e => /\D/.test(e)).join('')];
}

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'];
console.log(mean(lst));