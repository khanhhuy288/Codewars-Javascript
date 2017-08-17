function helpZoom(key){
  return key.join('') == key.reverse().join('') ? 'Yes' : 'No';
}

console.log(helpZoom([0, 0, 0, 0]));

