function rentalCarCost(d) {
	var discount = 0; 
	if (d > 6) 
		discount = 50;
	else if (d > 2)
		discount = 20;
	return d * 40 - discount;
}

const rentalCarCost1 = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

 console.log(rentalCarCost(1));			// 40
console.log(rentalCarCost(2));			// 80
console.log(rentalCarCost(3));			// 100
console.log(rentalCarCost(4));			// 140
console.log(rentalCarCost(5));			// 180
console.log(rentalCarCost(6));			// 220
console.log(rentalCarCost(7));			// 230
console.log(rentalCarCost(8));			// 270
console.log(rentalCarCost(9));			// 310
console.log(rentalCarCost(10));			// 350