var  mysql = require('mysql');
var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    port:'3306',
    database:'test'
});
var update = 'update student set name = ? where id =?';
var args = ['吕布','4'];
connection.query(update,args,function (err,reslut) {
    if (err){
        console.log('error - :',err.message);
        return;
    }
    console.log('------update-------')
    console.log('update affectedRows: ',reslut);
    console.log('-------------------\n\n')
});
connection.end;