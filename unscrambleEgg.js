function unscrambleEggs(word){
  return word.replace(/egg/g, "");
}

function unscrambleEggs1(word){
  return word.split("egg").join("");
}

console.time('Function #1');
unscrambleEggs("Beggegeggineggneggeregg");
console.timeEnd('Function #1');
console.time('Function #2');
unscrambleEggs1("Beggegeggineggneggeregg");
console.timeEnd('Function #2');

// RegExp is often slower 