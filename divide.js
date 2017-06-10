function divide(weight){
	if (weight == 2)
		return false;
	return weight % 2 === 0;
}

function divide1(weight) {
	return (weight >= 4 && weight % 2 === 0);
}

console.log(divide1(5));