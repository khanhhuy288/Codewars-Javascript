function reverseAll(arr){
  return arr.map(e => e.replace(/([a-zA-Z]+|[0-9]+|[^a-zA-Z0-9\n]+)/g, str => str.split('').reverse().join('')).split('\n').reverse().join('\n')).reverse(); 
}

console.log(reverseAll(["abc123!@#\n314159","987bbc\n#$%\nxyz886"])); // ["zyx688\n%$#\n789cbb","951413\ncba321#@!"]