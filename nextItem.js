function* countFrom(n) { for (let i = n; ; ++i) yield i; }

console.log(countFrom(1), 12);