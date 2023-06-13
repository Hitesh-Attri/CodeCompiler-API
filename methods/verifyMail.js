// const express = require('express');
// const router = express.Router();
const fs = require('fs');
const verificaltionConfirmationEmail = require('./verificationConfirmationMail');
// const __dir = "E:\\study\\A1\\A2\\CQ\\node\\CQnodeAssignments\\n_11_ECommerce_2"
const dir="e:\\study\\CLG\\Y3 S6\\DP";
const verifyMail = (req,res)=>{

    const token = req.params.token;
    console.log(token," <<<<")

    let flag = false;

    fs.readFile(dir+"/data.json",'utf-8',(error,data)=>{
        let theFile;
        if(data.length === 0) theFile = [];
        else theFile = JSON.parse(data);
        
        for(let i = 0 ; i < theFile.length;i++){
            if(theFile[i].token == token){
                flag = true;

                theFile[i].verified = true;
                req.session.name = theFile[i].name;
                req.session.mail=theFile[i].email;
                req.session.login = true;

                // verificaltionConfirmationEmail(theFile[i].email);

                fs.writeFile(dir +'/data.json',JSON.stringify(theFile),(err)=>{
                    console.log('data.json updated->"verifyEmailFSwrite", verifyMail.js')
                })
                // res.redirect("/home");
                res.send("your email has been verified. You can login now...");
            }
        }
        if(!flag){
            res.render('login', { loggedOut:-1, msg:"Error occured!",phrase:""});
        }
    })
}

module.exports = verifyMail;