function part(x){
  var count = x.filter(e => ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad'].indexOf(e) != -1).length;
  return count > 0 ? 'Mine\'s a Pint' + '!'.repeat(count) : 'Lynn, I\'ve pierced my foot on a spike!!';
}

console.log(part(['Grouse', 'Partridge', 'Pheasant'])); // 'Mine\'s a Pint!'