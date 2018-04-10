function superType(name) {
    this.name = name;
    this.colors = ["red","blue","green"];
}
superType.prototype.sayName = function () {
    console.log(this.name);
}
function subType(name ,age) {
    superType.call(this,name);
    this.age =age;
}
subType.prototype = new  superType();
subType.prototype.constructor =subType;
superType.prototype.sayAge = function () {
    console.log(this.age);
};
var instancel = new  subType("lihong",29);
instancel.colors.push("black");
console.log(instancel.colors);
instancel.sayName();
instancel.sayAge();
var instancel2 = new  subType("Greg",27);
console.log(instancel2.colors);
instancel2.sayName();
instancel2.sayAge();