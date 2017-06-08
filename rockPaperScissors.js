const rps = (p1, p2) => {
  switch(true){
  	case p1 === p2: return "Draw!";
  	case p1 === 'rock' && p2 === 'scissors': return "Player 1 won!";
  	case p1 === 'paper' && p2 === 'rock': return "Player 1 won!";
  	case p1 === 'scissors' && p2 === 'paper': return "Player 1 won!";
  	default: return "Player 2 won!";
  }
};

const rps1 = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!';
  }
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
};

console.log(rps('scissors','paper')); 	// Player 1 won!
console.log(rps('scissors','rock')); 	// Player 2 won!
console.log(rps('paper','paper')); 		// Draw!