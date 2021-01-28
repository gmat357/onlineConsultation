//  express
const express = require('express');
const router = express.Router();

//  mysql
const mysql = require('mysql');

//  db setting
const db_setting = require('../../mysql/index');
const db = db_setting.db(mysql);

var render = require('../../function/render');

router.get('/adminLoginList',(req,res)=>{
    res.render('adminMain',render.render("adminLoginList"));
});

router.get('/admin_login_list',(req,res)=>{
    console.log("접속");
    db.query('select * from `admin_login_list` order by no desc',(err,rows)=>{
        if(err) throw err;
        res.json(rows);
    })
})

module.exports = router;