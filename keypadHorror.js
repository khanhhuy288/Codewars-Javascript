function computerToPhone(numbers) {
  return numbers.split('').map(function(d) {return "0789456123"[d]; }).join('');
}