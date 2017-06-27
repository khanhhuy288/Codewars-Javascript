function bloodAlcoholContent(drinks, weight, sex, time){
  return +((drinks.ounces * drinks.abv * 5.14 / weight * (sex == 'male' ? 0.73 : 0.66)) - 0.015 * time).toFixed(4);
}

console.log(bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1));		//0.0837