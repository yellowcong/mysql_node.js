/**
 * Sequlize 关联关系
 */


var Sequelize = require('sequelize');
var sequelize = new Sequelize("mysql://root:root@localhost:3306/nodejs");


var Person = sequelize.define("person",{
	name:{type:Sequelize.STRING(32)},
},{
	//去掉updateAt和createAt
	timestamps: false,
	tableName :'t_person'
});
Person.sync();

var IdCard = sequelize.define("idcard",{
	number:{type:Sequelize.STRING(18)}
},{
	//去掉updateAt和createAt
	timestamps: false,
	tableName :'t_idcard'
});

IdCard.belongsTo(Person,{as:'person'});

//表单创建成功
IdCard.sync();

//添加数据
//这个方法是通过then 回调数据，和orm框架有所不同
Person.create({name:'yellowcong2'}).then(function(person){
	console.log(person.name);
	
	//给card添加关联对象
	IdCard.create({number:'422202199410106532'}).then(function(card){
		card.setPerson(person);
	});
});
