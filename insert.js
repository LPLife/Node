var mysql = require('mysql');
var  connection = mysql.createConnection({
    host :'127.0.0.1',
    user :'root',
    password : '123456',
    port : '3306',
    database : 'test',
})
connection.connect();
var  addSql = 'insert into student(id,name) values(?,?)';
var args = ['4','鲁班'];
connection.query(addSql,args,function (err,result) {
    if (err){
        console.log('error-',err.message);
        return;
    }
    console.log('------insert----');
    console.log('insert Id',result);
    console.log('----------------\n\n')
});
connection.end;









