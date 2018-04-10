var  mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    port : '3306',
    database :'test'
});
connection.connect();
var delSql = 'delete from student where id = ?';
var args = ['4'];
connection.query(delSql,args,function (err,result) {
    if (err){
        console.log('error - :' ,err.message);
        return;
    }
    console.log('-------------Delete-----------------');
    console.log('Delete:' ,result);
    console.log('-------------------------------------');
});

















