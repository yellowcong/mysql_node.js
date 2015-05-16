/**
 * 一对一的问题
 */

var Sequelize = require("sequelize");
//创建连接
var sequelize = new Sequelize("mysql://root:root@localhost:3306/nodejs");


var Person = sequelize.define("Peson",{
	username:{type:Sequelize.STRING(64),allowNull: false},
	age:{type:Sequelize.INTEGER}
},{
	//去掉updateAt和createAt
	timestamps: false,
	//设定表单名称
	tableName:'t_person',
});

Person.sync();

var IdCard = sequelize.define("IdCard",{
	number:{type:Sequelize.STRING(18),allowNull: false}
},{
	//去掉updateAt和createAt
	timestamps: false,
	//设定表单名称
	tableName:'t_id_card',
});
//建立关联关系
//会在Idcard中添加Person 字段
//通过as 表示添加 person_Id ，就不会是默认的PersonId了
//一对一 这个方法就是通过asone 来实现的
//多对一 是通过  belongsTo 来实现的
//IdCard.belongsTo(Person,{as: 'person', foreignKey: 'person'});
IdCard.Person(Person,{as:"person"});
IdCard.belongsTo(Person,{as:"person"});

//强制生成表
IdCard.sync();


//添加数据

