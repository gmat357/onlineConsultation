var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//  function
var render = require('../../function/render');

// setting
var db_setting = require('../../mysql/index');
var db = db_setting.db(mysql);

router.get('/consultantLoginList',(req,res)=>{
    if(!req.user){
        res.redirect('/adminLogin');
    }else{
        var user = req.user;
        res.render('adminMain',render.render(user,"consultantLoginList"));
    }
});

router.get('/consultant_login_list',(req,res)=>{
    db.query('select * from `consultant_login_list` order by no desc',(err,rows)=>{
        if(err) throw err;
        res.json(rows);
    })
})

module.exports = router;