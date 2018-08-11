var countSheep = function (num){
  return [...Array(num).keys()].map(x=>`${x+1} sheep...`).join``;
};

console.log(countSheep(5));
