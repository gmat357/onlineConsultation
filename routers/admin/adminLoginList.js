var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//  function
var render = require('../../function/render');

//  setting
var db_setting = require('../../mysql/index');
var db = db_setting.db(mysql);


router.get('/adminLoginList',(req,res)=>{
    if(!req.user){
        res.redirect('/adminLogin');
    }else{
        var user = req.user;
        res.render('adminMain',render.render(user,"adminLoginList"));
    }
});

router.get('/admin_login_list',(req,res)=>{
    db.query('select * from `admin_login_list` order by no desc',(err,rows)=>{
        if(err) throw err;
        res.json(rows);
    })
})

module.exports = router;