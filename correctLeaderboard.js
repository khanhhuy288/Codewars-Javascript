function correct(leaderBoard){
  var leader = leaderBoard.match(/^#1 (.+)\n/);
  return leader;
}

console.log(correct("#1 nick.strohl\n#2 myjinxin2015\n#3 davidRa\n#4 hilary\n#5 SIvanov"));
// '#1 myjinxin2015\n#2 nick.strohl\n#3 davidRa\n#4 hilary\n#5 SIvanov'
console.log(correct("#1 kjmosher\n#2 bellmyer\n#3 myjinxin2015\n#4 fsuuuzi\n#5 marcinbunsch"));
// '#1 myjinxin2015\n#2 bellmyer\n#3 kjmosher\n#4 fsuuuzi\n#5 marcinbunsch'
