function scale(strng, k, n) {
    return strng.split('\n').map(e => Array(n).fill(e.split('').map(e => e.repeat(k)).join('')).join('\n')).join('\n');
}

var a = "abcd\nefgh\nijkl\nmnop";
// "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
console.log(scale(a, 2, 3));