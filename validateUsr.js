function validateUsr(username) {
  return (/[\da-z_]/g).test(username);
}

console.log(validateUsr('asddsa'));