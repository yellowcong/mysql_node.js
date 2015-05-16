/**
 * 级联 关系
 */
var orm = require("orm");

orm.connect("mysql://root:root@127.0.0.1:3306/nodejs", function (err, db) {
	if(err){
		console.log(err);
	}
	
	var Person = db.define('person',{
		name:{type:'text',size:64},
		age:Number,
	})
	var IdCard = db.define("id_card",{
		number:{type:'text',size:18},
	});
	//默认会在后面给你加上一个 _id，就变成了 person_id
	IdCard.hasOne('person',Person);
	
	//同步所有的表
	db.sync(function(err){
		
		//添加数据
		Person.create({name:'yellowcong',age:20},function(err,person){
			if(err){
				console.log(err);
			}
			IdCard.create({number:'422302199410106532'},function(err,card){
				card.setPerson(person,function(date){
					console.log(date);
				});
			});
		});
		
	});
});
 
