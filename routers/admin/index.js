//  express
var express = require('express');
var router = express.Router();

//  mysql
var mysql = require('mysql');

//  db setting
var db_setting = require('../../mysql/index');
var db = db_setting.db(mysql);

var render = require('../../function/render');

router.get('/admin',(req,res)=>{
    if(!req.user){
        res.redirect('/adminLogin');
    }else{
        var user = req.user;
        res.render('adminMain',render.render(user,"adminMain"));
    }
});

module.exports = router;