function haikuWizard(arr) {
	return arr.map(e => e.map(n => {
		var i = [...n.toString()];
		return words[i[0] - 1][i[1]]; 
	}).join(' ')).join('\n');
}

var words = [
["like", "a", "tweet", "what", "for", "world", "whale", "one", "last", "sun"],
["ocean", "beauty", "tweet", "monster", "yellow", "return", "despair", "flower", "return", "contrast"],
["romantic", "curious", "banana", "jealousy", "tactlessly", "remorseful", "follower", "elephant", "however", "instagram"],
["salmonella", "consequently", "irregular", "intelligence", "vegetable", "ordinary", "alternative", "watermelon", "controversial", "marijuana"],
["lackadaisical", "serendipity", "colonoscopy", "dramatically", "parsimonius", "imagination", "electricity", "diabolical", "deforestation", "abomination"],
["extraterrestrial", "onomatopoeia", "responsibility", "revolutionary", "generalisation", "enthusiastically", "biodiversity", "veterinarian", "characteristically", "indefatigable"],
["oversimplification", "individuality", "decriminalisation", "compartmentalisation", "anaesthesiologist", "industrialisation", "buckminsterfullerene", "irresponsibility", "autobiographical", "utilitarianism"]];

console.log(haikuWizard([[10, 11, 23, 16], [50, 12, 14], [15, 40]]));
console.log(haikuWizard([[11, 30, 17], [51, 21], [52]]));
console.log();