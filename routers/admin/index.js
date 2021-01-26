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
const main = require('../../layout/admin/main');
const footer = require('../../layout/admin/footer');

router.get('/admin',(req,res)=>{
    const render = {
        nav:nav.nav(),
        header:header.header(),
        content:main.main(),
        footer:footer.footer(),
        css:"adminMain"
    }
    res.render('adminMain',render);
});

module.exports = router;