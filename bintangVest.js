function vestBuy(price, haggle){
  var discounts = {'light':80, 'medium':70, 'heavy':60, 'walkandswear':10}; 
  var d = discounts[haggle]; 
  return d ? price/100*d : 'Run!!';
}