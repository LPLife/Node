var fs = require('fs');
fs.stat('input.txt',function (err,stats) {
    console.log(stats.isFile())
   console.log( stats.isDirectory());   
});