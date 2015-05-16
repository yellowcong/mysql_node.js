/**
 * New node file
 */
//导入包
var Sequelize = require('sequelize');

//创建连接
var sequelize = new Sequelize("mysql://root:root@localhost:3306/nodejs");

//定义 一个用户对象
var Teacher = sequelize.define('Teacher', {
	// 用户名为String类型
	username :  {
	    type: Sequelize.STRING,
	    //定义字段别名
	    field: 'user_name' 
	  },
	// 日期类型
	birthday : Sequelize.DATE
},{
  freezeTableName: true
});
//通过sync可以创建表
Teacher.sync({force: true}).then(function(){
	//创建对象,当我们创建了对象的时候，如果数据库中没有表，就会报错
	Teacher.create({username:'yellowcong',birthday:new Date()});
});
