var orm = require ('../config/orm.js');

var burger = {

    selectAll: function(cb){
        //call selectAll from orm(already required), insert burgers as the table input,
        //function(res) is the call back. All this gets sent to burgers_controllers file (routes)
        orm.selectAll('burgers',function(res){
            cb(res);
        })
    },

    insertOne: function(name,cb){
        orm.insertOne('burgers', name, cb);
    },

    updateOne: function(id,cb){
        orm.updateOne('burgers', id,cb);
    }


}
module.exports = burger;