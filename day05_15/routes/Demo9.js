/**
 * 多对一的关系
 */

var Sequelize = require('sequelize');
var sequelize = new Sequelize("mysql://root:root@localhost:3306/nodejs");

//创建公司 
var Department  = sequelize.define('department',{
	name:{type:Sequelize.STRING}
},{
	timestamps: false,
	tableName:'t_department'
});

Department.sync();

var Employee  = sequelize.define('employee',{
	name:{type:Sequelize.STRING(32)}
},{
	//去掉时间戳
	timestamps: false,
	//表名称
	tableName:'t_employee'
});

//添加 给Employee添加外键,加入deparment的外键，名称要注意 是 dep的名称
Employee.belongsTo(Department,{as:'department'});
//创建表
Employee.sync();


//添加数据

Department.create({name:'yellow_dep'}).then(function(dep){
	for(var i=0;i<10;i++){
		Employee.create({name:'emp'+i}).then(function(emp){
			//设定外键
			emp.setDepartment(dep);
//			console.log(emp.name);
		});
	}
});
//Department.find({name:'yellow_dep'}).then(function(dep){
//	console.log(dep.name+"__"+dep.id);
//	Employee.find({id:1}).then(function(emp){
//		console.log(emp.name);
//	});
//});

