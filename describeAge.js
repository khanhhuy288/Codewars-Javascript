function describeAge(age) {
  return `You're a(n) ${age <= 12 ? "kid" : age >= 13 && age <= 17 ? "teenager" : age >= 18 && age <= 64 ? "adult" : "elderly"}`; 
}