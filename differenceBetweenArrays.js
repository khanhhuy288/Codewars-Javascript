function diff(a, b){
  return [...new Set(a.concat(b).filter(e => a.includes(e) ^ b.includes(e)))].sort();
}