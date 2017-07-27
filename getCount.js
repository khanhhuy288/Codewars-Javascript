function getCount(words) {
  return {vowels: (words.match(/[aeiou]/gi) || []).length, consonants: (words.match(/[b-z&&[^eiou]]/gi) || []).length}; 
}