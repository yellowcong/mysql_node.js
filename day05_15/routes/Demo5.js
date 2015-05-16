/**
 * 多对一的情况
 */
var orm = require("orm");

orm.connect("mysql://root:root@127.0.0.1:3306/nodejs", function (err, db) {
	if(err){
		console.log(err);
	}
	
	//定义两个
	var Teacher = db.define('teacher',{name:String});
	var Student = db.define('student',{name:String});
	//在Student 添加外键  Students 
	Student.hasOne('teacher',Teacher);
	
	db.sync(function(err){
		if(err){
			console.log(err);
		}
		
		//添加数据
		//添加了一个老师，10个学生
		Teacher.create({name:'yellowcong'},function(err,teacher){
			
			//添加多个学生对象
			for(var i =0; i<  10;  i++){
				//添加学生对象
				Student.create({name:'stu'+i},function(err,stu){
					stu.setTeacher(teacher,function(date){
						console.log(date);
					});
				});
			}
		});
		
	});
	
});
