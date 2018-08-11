function finalAttackValue(x,monsterList){
  	monsterList.forEach(function (e) {
  		x += x >= e ? e : gcd(e, x);
  	});
  	return x;
}

function gcd(a, b) {
  if (b == 0)
    return a; 
  return gcd(b, a % b);
}

const gcd0=(a,b)=>b?gcd(b,a%b):a; const finalAttackValue0=(x,m)=>m.reduce((a,b)=>a>=b?a+b:a+gcd(a,b),x);

console.log(finalAttackValue(50,[50,105,200]));			// 110
console.log(finalAttackValue(20,[30,20,15,40,100]));	// 205