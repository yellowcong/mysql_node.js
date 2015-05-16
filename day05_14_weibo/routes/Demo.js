/**
 * New node file
 */
//导入模块，需要导入mysql 模块
var mysql = require('mysql');
var util = require('util');
//创建连接
var conn = mysql.createConnection({
	//主机名称
    host: 'localhost',
    //用户名
    user: 'root',
    //密码
    password: 'root',
    //数据库
    database:'nodejs',
    //端口
    port: 3306
});
//创建连接
conn.connect();

console.log("连接成功");

//通过conn来查询数据
conn.query("select * from users",function(err, rows, fields){
	if(err){
		console.log(err);
	}
	//object 对象
	console.log(typeof rows);
	//rows就是查询到的数据
	console.log(rows);
	//返回的对象是一个数组对象
	console.log(rows[0]);
	//获取集合里面的一个数据
	console.log(rows[0].id);
	
	//存储的是查询的字段，也是一个数组对象
	console.log(fields);
	
})
//关闭连接
conn.end();