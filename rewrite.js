var util = require('util');
function superType(name) {
    this.name = name;
    this.colors = ["red","blue","gren"];
    this.sayHello = function() {
        console.log('Hello ');
    };

}
superType.prototype.sayName = function () {
    return this.name;
};
function subType(name,age) {
    superType.call(this,name);
    this.age = age;
}
util .inherits(subType,superType);
superType.prototype.sayAge = function () {
    return this.age;
} ;
var f = new  subType("liming",78);
var  h = new subType("qingkong",45);
console.log(f.sayAge());
console.log(f.sayName());
f.colors.push("black");
console.log(f.colors);
f.sayHello();

console.log(h.sayAge());
console.log(h.sayName());
console.log(h.colors);
f.sayHello();