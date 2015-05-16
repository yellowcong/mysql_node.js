/**
 * New node file
 */
var mysql = require("mysql");
var pool = mysql.createPool({
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

//获取连接
pool.getConnection(function(err,conn){
	//conn就是我们的连接,然后调用我们的查询方法
	conn.query("select * from users",function(err,rows){
		console.log(rows);
	});
});