/**
 * New node file
 */
var orm = require("orm");

orm.connect("mysql://root:root@127.0.0.1:3306/nodejs", function (err, db){
	if(err){
		console.error("连接失败");
		console.log(err);
	}
	
	//定义用户对象
	var Person = db.define('person',{
		name:String,
		age:Number,
	});
	
	//这个方法生成的表单名称惨不忍睹
	//
	var Student = Person.extendsTo("person", {
		job:String
	});
	db.drop(function(err){
		if(err){
			console.log(err);
		}
		Student.sync(function(err){
			if(err){
				console.log(err);
			}
		});
	});
	
	
	//同步数据
	/*db.sync(function(err){
		if(err){
			console.log(err);
		}
		
		//定义对象
		var p = new Person({name:'yellowcong',age:20});
		//保存对象
		p.save();
		
		
	});*/
	
});
