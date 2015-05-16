/**
 * New node file
 */
var Sequelize = require("sequelize");
//创建连接
var sequelize = new Sequelize("mysql://root:root@localhost:3306/nodejs");

sequelize.query("select * from roles", {type:sequelize.QueryTypes.SELECT}).then(function(roles){
	//获取的对象是一个数组对象，里面装着元组
	console.log(roles);
	//获取第一个数组中的数据
	console.log(roles[0].job);
});