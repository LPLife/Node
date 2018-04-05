buf = Buffer.alloc(256);
len = buf.write("你好,我来自上海兴宁区");
console.log(buf.toString('UTF-8'));
console.log(buf.toString('UTF-8',0,6));
console.log(buf.toString('Base64',0,6));
console.log(buf.toString(undefined,0,6));
