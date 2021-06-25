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
const db_setting = require('../mysql/index');
const db = db_setting.db(mysql);

//  bcrypt
const bcrypt = require('bcrypt-nodejs');

//  request-ip router module
const requestIp = require('request-ip');


//  body-parser setting
router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({extended:false}));

//  cookie-parser setting
router.use(cookieParser('keyboard cat'));

//  express-session setting
router.use(session({secret:'keyboard cat', resave:true, saveUninitialized:false}));

//  flash setting
router.use(flash());

//  passport session loading
router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((id,done)=>{
    let userInfo;
    db.query('select * from admin_list where id = ?', id,(err, rows)=>{
        if(err) throw err;
        var json = JSON.stringify(rows[0]);
        userInfo = JSON.parse(json);
        done(null, userInfo);
    });
});

passport.use(new LocalStrategy({
    usernameField:'id',
    passwordField:'psw'
},
(username, password, done)=>{
    db.query('select * from admin_list where id = ? ', username,(err, rows)=>{
        if(err) throw err;

        if(rows.length == 0){
            return done(null,false,{message:'등록된 계정이 없습니다.'});
        }
        if(username != rows[0].id){
            return done(null, false, {message:"아이디가 다릅니다."});
        }
        if(bcrypt.compareSync(password, rows[0].psw)){
            return done(null, rows[0]);
        }else{
            return done(null,false,{message:"비밀번호가 일치하지 않습니다."});
        }
    });
}));

router.post('/admin/loginAction', passport.authenticate('local', {failureRedirect:'/adminLogin', failureFlash:true}),(req, res)=>{

    var id = req.user.id;
    var name = req.user.name;
    var auth = req.user.auth;
    var day = require('../function/date').date();
    var ip = requestIp.getClientIp(req);
    let sql = {id:id,name:name,login_date:day,ip:ip};

    db.query("select * from `admin_list` where id = ?",id,(err, rows)=>{
        if(err) throw err;
        var login_cnt = {login_count : Number(rows[0].login_count) + 1,last_login:day};
        db.query('update `admin_list` set ? where id = ?',[login_cnt,id]);
    });
    if(auth == "관리자"){ 
        db.query('insert into `admin_login_list` set ?',sql,(err,rows)=>{
            if(err) throw err;
            res.redirect('/admin'); 
        });
    }else if(auth == "상담원"){
        db.query('insert into `consultant_login_list` set ?',sql,(err,rows)=>{
            if(err) throw err;
            res.redirect('/admin'); 
        });
    }
});

router.get('/admin/logout',(req,res)=>{
    req.logOut();
    res.redirect('/adminLogin');
})

module.exports = router;