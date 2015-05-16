# mysql_node.js
mysql和node.js整合学习，其中有 sequelize 和 node.js的orm框架，两个 orm框架的学习


//Sequelize  框架
var Sequelize = require('sequelize');
var sequelize = new Sequelize("mysql://root:root@localhost:3306/nodejs");


//Orm框架
var orm = require("orm");
orm.connect("mysql://root:root@127.0.0.1:3306/nodejs", function (err, db) {})

总的来说两个关系型数据库的框架，类似的地方很多，我建议使用官方的orm框架，就是后者

	
