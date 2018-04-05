const buf = Buffer.alloc(20);
var Str ="you are good boy!";
buf.fill(Str,0,17);
console.log(buf.toString());