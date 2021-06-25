//  express
const express = require('express');
const router = express.Router();

router.get('/adminLogin',(req,res)=>{
    res.render('adminLogin');
});

module.exports = router;