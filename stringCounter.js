function stringCounter(inputS, charS){
  return (inputS.match(new RegExp(`[${charS}]`, 'g')) || []).length;
}