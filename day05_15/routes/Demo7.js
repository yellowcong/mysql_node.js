/**
 * find查询数据
 */

var orm = require("orm");

orm.connect("mysql://root:root@127.0.0.1:3306/nodejs", function (err, db) {
	
	var Person = db.define('person',{name:String});
	
	db.sync(function(err){
		if(err){
			console.log(err);
		}
		
		
		
		Person.find({id:[1,2]},function(err,persons){
			if(err){
				console.log(err);
			}
			//数据长度
			console.log(persons.length);
			
			//遍历里面的数据
			persons.forEach(function(person){
				console.log(person.name);
			});
		});
		//查询是否存在
		/*Person.exists({name:'yellowcong3'},function(err,result){
			console.log(result);
		})*/
		
		
		//判断数量
		/*Person.count({name:'yellowcong3'},function(err,result){
			//返回查询的数据条数
			console.log(result);
		})*/
		/*Person.one(function(err,result){
			//返回Person 对象
			console.log(result.length);
			console.log(result.name);
		});*/
		//通过get方法查询数据
		/*Person.get(1,function(err,result){
			if(err){
				console.log(err);
			}
			//返回Person 对象
			console.log(result.length);
			console.log(result.name);
		});*/
		/*//添加10条person
		for(var i=0;i<10;i++){
			Person.create({name:'yellowcong'+i},function(err,person){
				//查询数据
				if(err){
					console.log(err);
				}
			});
		}
		
		//查询用户名为 yellowccong1的对象
		Person.find({name:'yellowcong9'},function(err,result){
			console.log(result.length);
		});*/
	});
});

