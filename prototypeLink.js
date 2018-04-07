function superType(){
    this.property = true;
}
superType.prototype.getSuperValue = function () {
  return this.property;
};
function  subType() {
    this.subproperty = false;
}
subType.prototype = new  superType();
subType.prototype.getSubValue = function () {
    return this.subproperty;
};
var instance = new  subType();
console.log(instance.getSuperValue());
console.log(instance instanceof Object);
console.log(instance instanceof subType);
console.log(instance instanceof superType);