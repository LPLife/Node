function superType(){
    this.property = true;
}
superType.prototype.getSuperValue = function(){
    return this.property;
};
function  subType() {
    this.subproperty = false;
}

subType.prototype.getSubValue = function(){
    return this.subproperty;
};
subType.prototype.getSuperValue = function(){
  return false
};

subType.prototype = new superType();
var instance = new subType();
console.log(instance.getSuperValue());