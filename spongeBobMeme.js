function spongeMeme(sentence) {
  return sentence.replace(/./g, (c, i) => i % 2 == 0 ? c.toUpperCase() : c.toLowerCase());
}

function spongeMeme2(sentence) {
  return sentence.split("").map((x,i) => i % 2 == 0 ? x.toUpperCase() : x.toLowerCase()).join("");
}

console.time('Function #1');
spongeMeme("colored teens cant Be successful in tech");
console.timeEnd('Function #1');

console.time('Function #2');
spongeMeme2("colored teens cant Be successful in tech");
console.timeEnd('Function #2');