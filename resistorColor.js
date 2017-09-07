function decodeResistorColors(bands) {
  	var colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'];
  	var materials = {'gold': '5%', 'silver': '10%'};
  	var bandsArr = bands.split(' ');
  	var r = +(colors.indexOf(bandsArr[0]).toString() + colors.indexOf(bandsArr[1])) * Math.pow(10, colors.indexOf(bandsArr[2]));
	var tolerance = materials[bandsArr[3]] || '20%';
	return `${r >= 1000000 ? r/1000000 + 'M' : r>= 1000 ? r/1000 + 'k' : r} ohms, ${tolerance}`;
}

console.log(decodeResistorColors("yellow violet black"));	// "47 ohms, 20%"
console.log(decodeResistorColors("yellow violet red gold"));	// "4.7k ohms, 5%"
console.log(decodeResistorColors("brown black green silver"));	// "1M ohms, 10%"