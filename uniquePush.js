function uniquePush(arr, obj) {
  return obj.phoneNumber && arr.every(function(other) { return other.phoneNumber != obj.phoneNumber; }) && arr.push(obj);
}

var nameArr = [];

var bob = {name:'bob', phoneNumber:1234};
var joe = {name:'joe', phoneNumber:12345};
var dupeJoe = {name:'I am duped', phoneNumber:12345};

console.log(uniquePush(nameArr, bob));
console.log(nameArr);
console.log(uniquePush(nameArr, joe));
console.log(uniquePush(nameArr, dupeJoe));
console.log(uniquePush(nameArr, {name: 'bad'}));
console.log(nameArr);