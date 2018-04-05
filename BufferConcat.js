var buffer1 = Buffer.from(('上海'));
var buffer2 = Buffer.from(('兴宁区'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3: " + buffer3.toString());