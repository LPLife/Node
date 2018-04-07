var fs = require("fs");
var zlib = require('zlib');
fs.createReadStream("zz.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("aa.txt"));
console.log("文件解压成功");