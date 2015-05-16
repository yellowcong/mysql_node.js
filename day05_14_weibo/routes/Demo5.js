/**
 * 创建角色 对象
 */
var Sequelize = require("sequelize");
//创建连接
var sequelize = new Sequelize("mysql://root:root@localhost:3306/nodejs");


var Role = sequelize.define("role",{
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
	
});


//创建表
Role.sync();


Role.max('id').then(function(result){
	console.log("最大id:"+result);
});

Role.min('id').then(function(result){
	console.log("最小id:"+result);
});

Role.sum('id').then(function(result){
	console.log("id的和:"+result);
});

/*Role.count().then(function(count){
	console.log("总有有"+count+"条数据");
});

//查询 id>2的记录条数
Role.count({where:{id:{$gt:2}}}).then(function(count){
	console.log("总有有"+count+"条数据");
});*/
/*//通过这个 方法 返回的是一个 反射对象
Role.findAll().then(function(roles){
	//获取所有的数据
	console.log(roles);
	//获取长度
	console.log(roles.length);
	
	//遍历里面的所有数据
	for(var i =0;i<roles.length;i++){
		role = roles[i];
		console.log(role.rolename+":"+role.job);
	}
});
//这两个，我感觉长得差不多
Role.all().then(function(roles){
	console.log(roles);
});*/
//Role.create({rolename:'yellowcong',job:'student'});
//Role.create({rolename:'xiaophai',job:'xifu'});
/*
//由于 yellowcong存在，所以没有创建
Role.findOrCreate({where:{rolename:'yellowcong'},defaults:{job:'default'}}).spread(function(role,created){
	console.log(created);
});

//
Role.findOrCreate({where:{rolename:'xxxx'},defaults:{job:'default'}}).spread(function(role,created){
	console.log(created);
});*/
/*
//查询唯一的数据
//查询id为 3的数据
Role.find(3).then(function(role){
	console.log(role.rolename);
});

//查询名称为yellowcong的用户
Role.find({rolename:'yellowcong'}).then(function(role){
	console.log(role.rolename);
});
*/
