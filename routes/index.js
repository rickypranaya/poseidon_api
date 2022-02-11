const express = require("express");
const exphbs = require("express-handlebars");
const db = require("../db")
const router = express.Router();
var moment = require('moment');

router.get("/",(req,res, next)=>{

    try{
        res.send('Poseidon ai is yea up');

    }catch(e){
        console.log(e)
        res.sendStatus(500);
    }
});

module.exports = router;