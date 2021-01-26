//  express
const express = require('express');
const router = express.Router();

//  passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//  flash
const flash = require('connect-flash');

//  cookie-parser
const cookieParser = require('cookie-parser');

//  session
const session = require('express-session');

//  body-parser
const bodyParser = require('body-parser');

//  mysql
const mysql = require('mysql');

//  db setting
const db_setting = require('../../mysql/index');
const db = db_setting.db(mysql);

//  body-parser setting
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

//  cookie-parser setting
router.use(cookieParser('keyboard cat'));

//  express-session setting
router.use(session({secret:'keyboard cat', resave:true, saveUninitialized:false}));

//  flash setting
router.use(flash());

passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((id,done)=>{
    let userInfo;
    db.query('select * from admin where id = ?', id,(err, rows)=>{
        if(err) throw err;
        var json = JSON.stringify(rows[0]);
        userInfo = JSON.parse(json);
        done(null, userInfo);
    });
});

module.exports = router;