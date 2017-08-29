var makeAcronym = function(string){
  return typeof string == 'string' && /^[A-z]+$/.test(string) ? string.split(' ').map(e => e[0].toUpperCase()).join('') : 'Not letters';
};