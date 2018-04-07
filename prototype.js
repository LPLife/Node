function Person() {
}
Person.prototype.name = "李连杰";
Person.prototype.age = 29;
Person.prototype.job ="software Engineer";
Person.prototype.sayName = function () {
   return this.name;
}
var person1 = new  Person();
console.log(person1.sayName());
var  person2 = new  Person();
console.log(person2.sayName());
console.log(person1.sayName() == person2.sayName())