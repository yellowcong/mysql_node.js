/**
 * 带参数的查询
 */

var Sequelize = require("sequelize");
//创建连接
var sequelize = new Sequelize("mysql://root:root@localhost:3306/nodejs");
//数据查询
//查询出jobs是 default的数据
sequelize.query("select * from roles where job = :job",{replacements: {job:"default"}, type: sequelize.QueryTypes.SELECT}).then(function(roles){
	//所有数据 
	console.log(roles);
	//获取条数
	console.log(roles.length);
});

