function strangeCode(s, e) {
  var str = '';
  while (s != e) {
    s++; 
    e--;
    str += 'a';
  }
  return str;
}

Test.assertEquals(strangeCode(4,8),"ab")

Test.assertEquals(strangeCode(10,15),"ab")

Test.assertEquals(strangeCode(10,16),"aba")
