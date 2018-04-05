var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABDC');
var buffer3 = Buffer.from('ABC');
var buffer4 = Buffer.from('AB');

var result = buffer1.compare(buffer2);
var result2 = buffer1.compare(buffer3);
var result3 = buffer1.compare(buffer4);
console.log(result);
console.log(result2);
console.log(result3);