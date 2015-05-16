/**
 * 数据库连接
 */

var orm = require('orm');

//基于url
/*orm.connect('mysql://root:root@127.0.0.1:3306/nodejs', function(err, db) {
  if(err){
	  console.log(err);
	  console.log("连接失败");
  }else{
	  console.log("连接成功");
  }
});*/

//基于配置
var db = orm.connect({
    host:     'localhost',
    database: 'nodejs',
    user:     'root',
    password: 'root',
    protocol: 'mysql',
    port:     '3306',
    query:    {pool: true, debug: true}
},function(err, db) {
	  if(err){
		  console.log(err);
		  console.log("连接失败");
	  }else{
		  console.log("连接成功");
	  }
});

var Person = db.define('person',{
	id:{type: 'serial', key: true},
	username:{type:'text'},
	age:{type: 'number'}
});
//通过sync方法来同步里面的表单
db.sync(function(err){
	if(err){
		console.log("同步失败");
		console.log(err);
	}
	console.log("数据创建成功");
	
	Person.create({username:'yellowcong',age:20},function(err,person){
		if(err){
			consolo.log(err);
		}
		//获取了一个对象， 不是一个简单 的数组对象
		console.log(person);
		//直接通过属性访问数据
		console.log(person.age);
		
		//更新数据
		person.age = 1314;
		//将数据更新为 age  =1314
		person.save(function(err){
			console.log(err);
		});
	});
});

