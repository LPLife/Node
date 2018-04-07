function superType() {
    this.colors = ["red","blue","green"];

}
function subType() {
    superType.call(this);
}
var instancel = new subType();
instancel.colors.push("black");
console.log(instancel.colors);
var instancel2 = new subType();
console.log(instancel2.colors);
