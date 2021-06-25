var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');

//  function
var render = require('../../function/render');
var date = require('../../function/date');

//  setting
var db_setting = require('../../mysql/index');
var db = db_setting.db(mysql);
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.get('/consultingList',(req,res)=>{
    if(!req.user){
        res.redirect('/adminLogin');
    }else{
        var user = req.user;
        res.render('adminMain',render.render(user,"consultingList"));
    }
});

router.get('/consulting_list',(req,res)=>{
    db.query('select * from `consulting_list` order by no desc',(err,rows)=>{
        if(err) throw err;
        res.json(rows);
    });
})

router.post('/consulting_delete_list',(req,res)=>{
    let jsonData = req.body.undefined;
    if(Array.isArray(jsonData)){
        for(let i = 0; i < jsonData.length; i++){
            db.query('delete from `consulting_list` where No = ?',jsonData[i]);
        }
    }else{
        db.query('delete from `consulting_list` where No = ?', jsonData);
    }
    
    res.redirect('/adminlist');
});

router.post('/consultingJoin', (req,res)=>{
    let body = req.body;
    let category = body.category;
    let name = body.name;
    let cellphone = body.phone;
    cellphone = cellphone[0] + "-" + cellphone[1] + "-" + cellphone[2];
    let email = body.email;
    let text = body.text;
    let use = body.use;
    let consultant = body.consultant;
    let assignment = body.assignment;
    let contract = body.contract;
    let visit = body.visit;
    let day = date.date();
    console.log(day);
    let sql = {
        category:category,
        name:name,
        cellphone:cellphone,
        email:email,
        text:text,
        use:use,
        consultant:consultant,
        assignment:assignment,
        contract:contract,
        visit:visit,
        insert_date:day, 
    };
    db.query('alter table `consulting_list` auto_increment = 1');
    db.query('insert into `consulting_list` set ?',sql,(err, rows)=>{
        if(err) throw err;
        res.redirect('/consultingList');
    });
});

router.get('/consultingList/:page',(req,res)=>{
    if(!req.user){
        res.redirect('/adminLogin');
    }else{
        var user = req.user;
        db.query("select * from `consulting_list`",(err,rows)=>{
            if(err) throw err;
            res.render('adminMain',render.render(user,"consultingView",rows));
        });
    }
});

router.get('/consultingList/update/:page',(req,res)=>{
    if(!req.user){
        res.redirect('/adminLogin');
    }else{
        const page = req.params.page;
        var user = req.user;
        db.query("select * from `consulting_list` where No = ?",page,(err,rows)=>{
            if(err) throw err;
            db.query('select * from `consultant_list`',(err2, rows2)=>{
                if(err2) throw err2;
                res.render('adminMain',render.render(user,"consultingView",rows,rows2));
            });
        });
    }
});

router.post('/consultingList/updateAction/:page',(req,res)=>{
    const page = req.params.page;
    // db.query("update `consulting_list` set ? where No = ?",[])
})

module.exports = router;