function superType(name) {
    this.name = name;
}
function subType() {
    superType.call(this,"liming")
    this.age = 29;
}
var instance = new subType();
console.log(instance.name);
console.log(instance.age);