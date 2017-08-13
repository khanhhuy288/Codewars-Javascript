const snakeToCamel = name => name.replace(/_./g, v => v[1].toUpperCase());
console.log(snakeToCamel('hello_cruel_world'));