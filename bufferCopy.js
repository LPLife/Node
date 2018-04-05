var buf1 = Buffer.from("hello world");
var buf2 = Buffer.from("cili");
var buf3 = Buffer.from(buf1);
buf2.copy(buf1,3,2);

console.log(buf1.toString());
console.log(buf3.toString());