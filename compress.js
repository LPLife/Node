var fs = require("fs");
var zlib = require("zlib");
fs.createReadStream("YS.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream('zz.txt.gz'));
console.log("文件压缩完成");
