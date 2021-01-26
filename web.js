// express
const express = require('express');
const app = express();

//  bodyparser
const bodyParser = require('body-parser');

//  path
const path = require('path');

//  port
const port = process.env.PORT || 3000;

//  routers
const adminLoginRouter = require('./routers/admin/login');
const adminMainRouter = require('./routers/admin/index');
const adminLoginListRouter = require('./routers/admin/adminLoginList');
const adminListRouter = require('./routers/admin/adminList');
const consultantListRouter = require('./routers/admin/consultantList');
const consultantLoginListRouter = require('./routers/admin/consultantLoginList');
const consultingListRouter = require('./routers/admin/consultingList');

//  bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//express static
app.use('/public',express.static(path.join(__dirname,"public")));
app.use('/consultingList/update/:page',express.static(path.join(__dirname,"public")));

//  ejs
app.set('views',path.join(__dirname,"views"));
app.set('view engine', 'ejs');

app.get('/admin',adminMainRouter);
app.get('/adminLogin',adminLoginRouter);
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

