function showMyPassword(birthdays){
  	var days = birthdays.map(d => new Date(d)).sort((a, b) => a - b);
  	var dadsMonth = (days[0].getMonth() + 1).toString();
   	var momsDate = days[1].getDate().toString();
  	return `${days[2].getYear()}${days[3].getYear()}${dadsMonth.length < 2 ? '0' + dadsMonth : dadsMonth}${momsDate.length  < 2 ? '0' + momsDate : momsDate}`;
}

console.log(showMyPassword(["1958-10-19","1993-11-15","1958-5-12","1978-3-22"]));		// "78930519"
