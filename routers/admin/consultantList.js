//  express
const express = require('express');
const router = express.Router();

//  mysql
const mysql = require('mysql');

//  body-parser
const bodyParser = require('body-parser');

//  bcrypt module
const bcrypt = require('bcrypt-nodejs');

//  db setting
const db_setting = require('../../mysql/index');
const db = db_setting.db(mysql);

var render = require('../../function/render');

const date = require('../../function/date');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.get('/consultantList',(req,res)=>{
    res.render('adminMain',render.render("consultantList"));
});

router.get('/consultant_list',(req,res)=>{
    db.query('select * from `consultant_list` order by no desc',(err,rows)=>{
        if(err) throw err;
        res.json(rows);
    });
})

router.post('/consultant_delete_list',(req,res)=>{
    let jsonData = req.body.undefined;
    if(Array.isArray(jsonData)){
        for(let i = 0; i < jsonData.length; i++){
            db.query('delete from `consultant_list` where No = ?',jsonData[i]);
        }
    }else{
        db.query('delete from `consultant_list` where No = ?', jsonData);
    }
    
    res.redirect('/adminlist');
});

router.post('/consultantJoin', (req,res)=>{
    let body = req.body;
    let id = body.id;
    let psw = body.psw;
    let name = body.name;
    let phone = body.phone;
    phone = phone[0] + "-" + phone[1] + "-" + phone[2];
    let cellphone = body.cellphone;
    cellphone = cellphone[0] + "-" + cellphone[1] + "-" + cellphone[2];
    let email = body.email;
    let day = date.date();
    bcrypt.hash(psw,null,null,(err,hash)=>{
        let sql = {
            id:id,
            psw:hash,
            name:name,
            phone:phone,
            cellphone:cellphone,
            email:email,
            use:"사용",
            insert_date:day,
            login_count:0,
            last_login:"",
        };
        db.query('alter table `consultant_list` auto_increment = 1');
        db.query('insert into `consultant_list` set ?',sql,(err, rows)=>{
            if(err) throw err;
            res.redirect('/admin');
        });
    });
});

module.exports = router;