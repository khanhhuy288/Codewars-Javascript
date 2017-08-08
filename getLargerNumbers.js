const getLargerNumbers = (a, b) => a.map((v, i) => Math.max(v, b[i]));

function getLargerNumbers2(a, b) {
  return a.map((elem, i) => elem >= b[i] ? elem : b[i]);
}