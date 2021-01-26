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
const consultantLoginList = require('../../layout/admin/consultantLoginList');
const footer = require('../../layout/admin/footer');

router.get('/consultantLoginList',(req,res)=>{
    const render = {
        nav:nav.nav(),
        header:header.header(),
        content:consultantLoginList.consultantLoginList(),
        footer:footer.footer(),
        css:"consultantLoginList"
    }
    res.render('adminMain',render);
});

router.get('/consultant_login_list',(req,res)=>{
    db.query('select * from `consultant_login_list` order by no desc',(err,rows)=>{
        if(err) throw err;
        res.json(rows);
    })
})

module.exports = router;