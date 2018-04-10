function object(o) {
    function F() {
    }
    F.prototype = o;
    return new F();
}
var person ={

    name: "hekun",
    friends:["shlby","Court","Van"]
};
var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("barbie");
console.log(person.friends);