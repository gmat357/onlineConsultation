//  express
const express = require('express');
const router = express.Router();

//  mysql
const mysql = require('mysql');

//  db setting
const db_setting = require('../../mysql/index');
const db = db_setting.db(mysql);

const nav = require('../../layout/admin/nav');
const header = require('../../layout/admin/header');
const adminLoginList = require('../../layout/admin/adminLoginList');
const footer = require('../../layout/admin/footer');

router.get('/adminLoginList',(req,res)=>{
    const render = {
        nav:nav.nav(),
        header:header.header(),
        content:adminLoginList.adminLoginList(),
        footer:footer.footer(),
        css:"adminLoginList"
    }
    res.render('adminMain',render);
});

router.get('/admin_login_list',(req,res)=>{
    console.log("접속");
    db.query('select * from `admin_login_list` order by no desc',(err,rows)=>{
        if(err) throw err;
        res.json(rows);
    })
})

module.exports = router;