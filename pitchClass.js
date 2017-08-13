function pitchClass(note){
	var notes = {'Cb': 11, 'C':0, 'D':2, 'E':4, 'F':5, 'G':7, 'A':9, 'B':11, 'B#':0};
	var keys = Object.keys(notes);
	return keys.includes(note) ? notes[note] : /^[ABCDEFG]{1}[#b]{1}$/.test(note) ? notes[note[0]] + (note[1] == '#' ? 1 : -1) : null;
}

console.log(pitchClass('D')); 		// 2 
console.log(pitchClass('D#')); 		// 3 
console.log(pitchClass('Ab')); 		// 8 
