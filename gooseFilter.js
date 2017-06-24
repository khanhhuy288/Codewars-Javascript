function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var result = [];
  for (var bird of birds) {
  	if (!geese.includes(bird))
  		result.push(bird);
  }
  return result;
}

function gooseFilter1 (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));  // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]));  // ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]));  // []
  
