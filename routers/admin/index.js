//  express
const express = require('express');
const router = express.Router();

//  mysql
const mysql = require('mysql');

//  db setting
const db_setting = require('../../mysql/index');
const db = db_setting.db(mysql);

var render = require('../../function/render');
const flash = require('connect-flash');
const passport = require('passport');
//  passport router module

//  express-session module
const session = require('express-session');
router.use(flash());
//  express-session setting
router.use(session({secret:'keyboard cat', resave:true, saveUninitialized:false}));

//  passport session loading
router.use(passport.initialize());
router.use(passport.session());

router.get('/admin',(req,res)=>{
    console.log(req.user);
    res.render('adminMain',render.render("adminMain"));
});

module.exports = router;