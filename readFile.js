var fs = require('fs');
fs.readFile('input.txt',function (err,data) {
    if (err){
        return console.error(err);
    }
    console.log("异步读数: "+data.toString());
});
console.log("hello1");
var  data = fs.readFileSync('input.txt');
console.log("同步读取: "+data.toString());
console.log("hello2");