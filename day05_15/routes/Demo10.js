/**
 * 一对多的情况
 */

var Sequelize = require('sequelize');
var sequelize = new Sequelize("mysql://root:root@localhost:3306/nodejs");


//定义老师对象
var Teacher = sequelize.define("teacher",{
	name:Sequelize.STRING(32)
},{timestamps: false,
	tableName:'t_teacher'
});


Teacher.sync({force:true});

//定义学生对象
var Student = sequelize.define("student",{
	name:Sequelize.STRING(32)
}
,{timestamps: false,
	tableName:'t_student'
});
Student.belongsTo(Teacher,{as:'teacher'});
Student.sync({force:true});
