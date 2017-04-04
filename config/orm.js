var connection  = require('./connection.js');

var orm = {

    selectAll: function(tableInput, cb){
        connection.query('SELECT * FROM ' + tableInput+";", function(err,result){
            if (err)throw err;
            cb(result)
        })
    },//end selectAll

    insertOne: function(tableInput, val, cb){
        connection.query('INSERT INTO  '+ tableInput + "(burger_name) VALUES ('"+val+"');", function(err,result){
            if (err)throw err;
            cb(result)
        })
    },//end insertOne

    updateOne: function(tableInput,condition, cb){
        connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id=' +condition+';', function(err,result){
            if (err)throw err;
            cb(result)
        })
    }//end update


}
module.exports = orm;