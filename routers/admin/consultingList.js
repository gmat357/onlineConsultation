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

const nav = require('../../layout/admin/nav');
const header = require('../../layout/admin/header');
const consultingList = require('../../layout/admin/consultingList');
const consultingView = require('../../layout/admin/consultingView');
const consultingUpdate = require('../../layout/admin/consultingUpdate');
const footer = require('../../layout/admin/footer');

const date = require('../../function/date');
const { render } = require('ejs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.get('/consultingList',(req,res)=>{
    const render = {
        nav:nav.nav(),
        header:header.header(),
        content:consultingList.consultingList(),
        footer:footer.footer(),
        css:"consultingList"
    }
    res.render('adminMain',render);
});

router.get('/consulting_list',(req,res)=>{
    console.log("접속");
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
        res.redirect('/admin');
    });
});

router.get('/consultingList/:page',(req,res)=>{
    db.query("select * from `consulting_list`",(err,rows)=>{
        if(err) throw err;
        const render = {
            header:header.header(),
            nav:nav.nav(),
            content:consultingView.consultingView(rows),
            footer:footer.footer(),
            css:"consultingView",
        };
        res.render('adminMain',render);
    });
});

router.get('/consultingList/update/:page',(req,res)=>{
    const page = req.params.page;
    db.query("select * from `consulting_list` where No = ?",page,(err,rows)=>{
        if(err) throw err;
        db.query('select * from `consultant_list`',(err2, rows2)=>{
            if(err2) throw err2;
            const render = {
                header:header.header(),
                nav:nav.nav(),
                content:consultingUpdate.consultingUpdate(rows,rows2),
                footer:footer.footer(),
                css:"consultingView",
            };
            res.render('adminMain',render);
        })
    });
});

router.post('/consultingList/updateAction/:page',(req,res)=>{
    const page = req.params.page;
    // db.query("update `consulting_list` set ? where No = ?",[])
})

module.exports = router;