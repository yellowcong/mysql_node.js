/**
 * 一对多的情况
 * 
 * 一个公司 对应多个员工
 */
var orm = require("orm");

orm.connect("mysql://root:root@127.0.0.1:3306/nodejs", function (err, db) {
	if(err){
		console.log(err);
	}
	
	//定义公司
	var Department = db.define('department',{name:String});
	//定义员工
	var Employee = db.define('deployee',{name:String});
	//一个公司有多个员工
	Department.hasMany('employee',Employee);
	
	//添加员工
	
	db.sync(function(err){
		if(err){
			console.log(err);
		}
		Department.create({name:'yellow_dep'},function(err,dep){
			//添加10个员工
			
			for(var i =0;i<10;i++){
				Employee.create({name:'emp'+i},function(err,emp){
					dep.addEmployee([emp],function(err){
						if(err){
							console.log(err);
						}
					});
				});
			};
		});
		
	});
	
	
});
