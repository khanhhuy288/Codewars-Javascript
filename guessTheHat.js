function sc(exchange){
  return exchange.reduce((acc, ex) => ex[0] == acc ? ex[2] : ex[2] == acc ? ex[0] : acc, '2');
}

console.log(sc(["1-2","1-3","2-3"])); // "2" 
console.log(sc(["1-2","2-3","1-3"])); // "3" 