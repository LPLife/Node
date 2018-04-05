const buf = Buffer.from('Helloworld','ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('UTF-8'));