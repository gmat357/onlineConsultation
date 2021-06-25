function outh_module(){
    const express = require('express');
    const router = express.Router();
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

}
return outh_module;

