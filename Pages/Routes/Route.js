const express = require("express");
const router = express.Router();


router.get("/Home",(req,res)=>{
    res.render("HomePage");
});

router.get("/Our Services",(req,res)=>{
    res.render("OurServices");
});


router.get("/Contact us",(req,res)=>{
    res.render("ContactUs");
});


module.exports = router;