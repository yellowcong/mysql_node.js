/**
 * 通过原生SQL查询数据
 */

var Sequelize = require("sequelize");
//创建连接
var sequelize = new Sequelize("mysql://root:root@localhost:3306/nodejs");

//也是通过Query 方法
sequelize.query("update roles set role_name = ? where job = ?",{replacements: ['xxxx','yellowcong']}).spread(function(results, metadata){
	//更改的条数 
	console.log(metadata);
})
