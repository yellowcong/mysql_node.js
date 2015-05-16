/**
 * New node file
 */
var orm = require("orm");

orm.connect("mysql://root:root@127.0.0.1:3306/nodejs", function (err, db) {
  if (err) throw err;

    var Person = db.define("person", {
        name      : String,
        surname   : String,
        age       : Number, // FLOAT
        male      : Boolean,
        continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM type
        photo     : Buffer, // BLOB/BINARY
        data      : Object // JSON encoded
    }, {
        methods: {
            fullName: function () {
                return this.name + ' ' + this.surname;
            }
        },
        validations: {
            age: orm.enforce.ranges.number(18, undefined, "under-age")
        }
    });

    // 添加表单到数据库中
    db.sync(function(err) { 
        if (err) throw err;

        // 创建对性爱那个
        Person.create({ id: 1, name: "John", surname: "Doe", age: 27 }, function(err) {
            if (err) throw err;

                // 查询对象
                Person.find({ surname: "Doe" }, function (err, people) {
                    // SQL: "SELECT * FROM person WHERE surname = 'Doe'"
                    if (err) throw err;

                    console.log("People found: %d", people.length);
                    console.log("First person: %s, age %d", people[0].fullName(), people[0].age);

                    people[0].age = 16;
                    people[0].save(function (err) {
                        // err.msg = "under-age";
                });
            });

        });
    });
});