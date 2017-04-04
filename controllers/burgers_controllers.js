//This is the "routes" file

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//When we get '/', selectAll is called from models/burger.js 
//which then calls selectAll from orm.js 
//via callbacks, the burgers are returned via the same path(orm->model->controller
//and controller sends the data to be rendered (in this case to handlebars)
router.get('/', function(req,res){
    burger.selectAll(function(burger_data){
        console.log(burger_data);
        var hbsObject ={
            burgers: burger_data
        };
        res.render('index', hbsObject);
    })
})

//When we post/insert a burger, we get redirected to '/'...which then renders all burgers
router.post('/burgers/create', function(req,res){
    burger.insertOne(req.body.burger_name, function(result){
        //by redirecting to '/' we call the selectAll to render the burgers on the page
        res.redirect('/');
    })
})

//When we put/update (devour) a burger, again redirected to '/' and all burgers rendered to page where designated (devoured or not).
router.put('/burgers/update', function(req,res){
    burger.updateOne(req.body.burgerID, function(result){
        res.redirect('/');
    })
})

module.exports = router;