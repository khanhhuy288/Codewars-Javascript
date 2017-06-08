function getGrade (s1, s2, s3) {
  // get average score 
  var score = (s1+s2+s3) / 3;
  switch(true){
  	case 90 <= score && score <= 100: return 'A';
  	case 80 <= score && score <= 90: return 'B';
  	case 70 <= score && score <= 80: return 'C';
  	case 60 <= score && score <= 70: return 'D';
  	case 0 <= score && score <= 60: return 'F';
  }
}

function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3;
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";
}

