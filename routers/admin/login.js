//  express
const express = require('express');
const router = express.Router();

//  mysql
const mysql = require('mysql');

//  db setting
const db_setting = require('../../mysql/index');
const db = db_setting.db(mysql);

router.get('/adminLogin',(req,res)=>{
    res.render('adminLogin');
});

module.exports = router;