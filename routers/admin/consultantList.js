var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');

//  function
var render = require('../../function/render');
var date = require('../../function/date');

// setting
var db_setting = require('../../mysql/index');
var db = db_setting.db(mysql);
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.get('/consultantList',(req,res)=>{
    if(!req.user){
        res.redirect('/adminLogin');
    }else{
        var user = req.user;
        res.render('adminMain',render.render(user,"consultantList"));
    }
});

router.get('/consultant_list',(req,res)=>{
    db.query('select * from `admin_list` where auth = ? order by no desc',"상담원",(err,rows)=>{
        if(err) throw err;
        res.json(rows);
    });
})

router.post('/consultant_delete_list',(req,res)=>{
    let jsonData = req.body.undefined;
    if(Array.isArray(jsonData)){
        for(let i = 0; i < jsonData.length; i++){
            db.query('delete from `admin_list` where No = ?',jsonData[i]);
        }
    }else{
        db.query('delete from `admin_list` where No = ?', jsonData);
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
            auth:"상담원"
        };
        db.query('alter table `admin_list` auto_increment = 1');
        db.query('insert into `admin_list` set ?',sql,(err, rows)=>{
            if(err) throw err;
            res.redirect('/admin');
        });
    });
});

module.exports = router;