function calculateTip(amount, rating) {
  var tip; 
  switch (rating.toLowerCase()) {
    case 'terrible': 
    	tip = 0;
    	break;
    case 'poor': 
    	tip = 5;
    	break;
    case 'good': 
    	tip = 10;
    	break;
    case 'great': 
    	tip = 15;
    	break;
    case 'excellent': 
    	tip = 20;
    	break;
    default:
    	return 'Rating not recognised';
  }
  return Math.ceil(amount / 100 * tip);
}

function calculateTip1(amount, rating){
	var tips = { 
    	'terrible'  : 0, 
    	'poor'      : 0.05, 
    	'good'      : 0.1, 
    	'great'     : 0.15, 
    	'excellent' : 0.2 
  	};
  
  rating = rating.toLowerCase();

  return rating in tips ? Math.ceil(amount * tips[rating]) : "Rating not recognised";
}