//These are your super secret characters you will use to make the password super secure
var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
var dict = superSecretChars.map(e => e[0]);
function createSSP(password){
  return password.replace(/[asohx]/gi, c => superSecretChars[dict.indexOf(c.toLowerCase())][1]);
}

console.log(createSSP("HaxorPassword"));		// "5@*0rp@$$w0rd"