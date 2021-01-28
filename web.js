// express
const express = require('express');
const app = express();

//  bodyparser
const bodyParser = require('body-parser');

const flash = require('connect-flash');
const passport = require('passport');
//  passport router module

//  express-session module
const session = require('express-session');
app.use(flash());
//  express-session setting
app.use(session({secret:'keyboard cat', resave:true, saveUninitialized:false}));

//  path
const path = require('path');

//  port
const port = process.env.PORT || 3000;

//  req.user.name 값가져오기 까지함 header부분 수정해야됨


//  routers
const adminLoginRouter = require('./routers/admin/login');
const adminOuthRouter = require('./outh/index');
const adminMainRouter = require('./routers/admin/index');
const adminLoginListRouter = require('./routers/admin/adminLoginList');
const adminListRouter = require('./routers/admin/adminList');
const consultantListRouter = require('./routers/admin/consultantList');
const consultantLoginListRouter = require('./routers/admin/consultantLoginList');
const consultingListRouter = require('./routers/admin/consultingList');

//  bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(passport.initialize());
app.use(passport.session());


//express static
app.use('/public',express.static(path.join(__dirname,"public")));
app.use('/consultingList/update/:page',express.static(path.join(__dirname,"public")));

//  ejs
app.set('views',path.join(__dirname,"views"));
app.set('view engine', 'ejs');

app.get('/admin',adminMainRouter);
app.get('/adminLogin',adminLoginRouter);
app.post('/admin/loginAction',adminOuthRouter);
app.get('/adminLoginList',adminLoginListRouter);
app.get('/adminList',adminListRouter);
app.post('/adminJoin',adminListRouter);
app.get('/consultantList',consultantListRouter);
app.post('/consultantJoin',consultantListRouter);
app.get('/consultantLoginList',consultantLoginListRouter);
app.get('/consultingList',consultingListRouter);
app.post('/consultingJoin',consultingListRouter);
app.get('/consultingList/:page',consultingListRouter);
app.get('/consultingList/update/:page',consultingListRouter);
app.get('/admin/logout',adminOuthRouter);

//  ajax
app.get('/admin_login_list',adminLoginListRouter);
app.get('/admin_List',adminListRouter);
app.post('/admin_delete_List',adminListRouter);
app.get('/consultant_List',consultantListRouter);
app.post('/consultant_delete_List',consultantListRouter);
app.get('/consultant_login_list',consultantLoginListRouter);
app.get('/consulting_List',consultingListRouter);
app.post('/consulting_delete_List',consultingListRouter);

app.listen(port,()=>{console.log("express server " + port + " open")});

