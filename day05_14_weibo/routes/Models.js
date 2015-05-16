/**
 * 创建角色 对象
 */
var Sequelize = require("sequelize");
//创建连接
var sequelize = new Sequelize("mysql://root:root@localhost:3306/nodejs");

//定义角色对象
//其中我们需要将Role 对象暴漏，供其他的方法调用
exports.Role = sequelize.define("role",{
	// 用户名为String类型
	rolename :  {
	    type: Sequelize.STRING,
	    //定义字段别名
	    field: 'role_name',
		//角色名称不可以为空
	    allowNull: false,
	  },
	  job:{
		  type:Sequelize.STRING,
	  },
	 create_date:{
		 type:Sequelize.DATE,
		 //修改field
		 field:'create_date',
		 //设定默认时间
		 defaultValue: Sequelize.NOW,
	 }
},{
	//去掉updateAt和createAt
	updatedAt:false,
	createdAt:false
	
}).sync();

//定义User 对象
exports.User = sequelize.define('User',{
	username:{type:Sequelize.STRING(64),allowNull: false},
	nickname:{type:Sequelize.STRING(64),allowNull: true},
	password:{type:Sequelize.STRING(64),allowNull: false},
},{
	//去掉updateAt和createAt
	timestamps: false,
	//设定表单名称
	tableName:'t_user',
}).sync();

exports.Person = sequelize.define('Person',{
	username:Sequelize.STRING(64),
	age:Sequelize.INTEGER,
},{
	//去掉updateAt和createAt
	timestamps: false,
	//设定表单名称
	tableName:'t_person',
}).sync();

exports.Idcard = sequelize.define('IdCard',{
	number:Sequelize.STRING(18),
},{
	//去掉updateAt和createAt
	timestamps: false,
	//设定表单名称
	tableName:'t_id_card',
}).sync();



