function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

//  \d for digits, equivalent to [0-9] in JS 