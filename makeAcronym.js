var makeAcronym = function(string){
  return typeof string != 'string' ? 'Not a string' : !/^[A-z\s]+$/.test(string) ? 'Not letters' : string.split(' ').map(e => e[0].toUpperCase()).join('');
}