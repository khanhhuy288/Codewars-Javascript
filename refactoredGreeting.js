function greet(myName, yourName){
  return "Hello " + yourName + ", my name is " + myName;
}
class Person {
  constructor (name) {
    this.name = name;
  }
  greet (yourName) {
    return `Hello ${yourName}, my name is ${this.name}`;
  }
}