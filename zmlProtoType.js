function superType() {
    this.property = true;
}
superType.prototype.getSuperValue = function () {
    return this.property;
};
function subType() {
    this.subproperty = false;
}
subType.prototype = new  superType();

subType().prototype = {
    getSubValue:function () {
        return this.subproperty;
    },
    someotherMethod:function () {
        return false;
    }
};

var instance = new  subType();
console.log(instance.getSuperValue());//error!