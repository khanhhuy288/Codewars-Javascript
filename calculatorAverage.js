var Calculator = {
	average: function() {
		console.log(arguments);
  		return [...arguments].reduce((sum, x) => sum + x, 0)/arguments.length;
 	}
};
	
console.log(Calculator.average());