/**
 * New node file
 */
var Sequelize = require('sequelize');
var sequelize = new Sequelize("mysql://root:root@localhost:3306/nodejs");

// 定义 一个用户对象
var User = sequelize.define('User', {
	// 用户名为String类型
	username : Sequelize.STRING,
	// 日期类型
	birthday : Sequelize.DATE
});

console.log("连接成功");

//保存对象
//线程阻塞的方法
User.create({username:'yellowcong',birthday:new Date()});