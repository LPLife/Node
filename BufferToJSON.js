const buf = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const buff = Buffer.from("hello world");
const json = JSON.stringify(buf);
const json2 = JSON.stringify(buff);
console.log(json);
console.log(json2);
console.log(json.type);
var jsont = buf.toJSON();
var jsonf = buff.toJSON();
console.log(jsont.type);
console.log(jsonf.type);
console.log(jsonf.data);
const copy = JSON.parse(json,(key,value)=>{
return value && value.type === 'Buffer'?
Buffer.from(value.data):value;
})
console.log(copy);

