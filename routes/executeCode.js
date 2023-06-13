const express=require("express")
const fs = require("fs")
const axios = require('axios');

const router=express.Router()
// const dir="h:\\ECOMMERCE";
const dir="e:\\study\\CLG\\Y3 S6\\DP";
app = express();
app.use(express.json()); 
const session = require("express-session");//
const e = require("express");

router.get("/",(req, res) =>{
    if (req.session.login) {
        res.redirect("/")
    }
    else {
        res.render("login.ejs", { phrase: "" })
    }
});
router.post("/",async (req, res)=> {
    console.log(req.body, typeof req.body);

    // let obj = JSON.parse(req.body);
    // code = JSON.parse(code);
    // console.log(code,typeof code);

    let options;
    //cpp
    if(req.body.langId==77){
        options = {
        method: 'POST',
        url: 'https://cpp-17-code-compiler.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'e05b012b86msh66e2b351b7aba3cp10f0f9jsn95e4adfbca74',
          'X-RapidAPI-Host': 'cpp-17-code-compiler.p.rapidapi.com'
        },
        data: {
          code: req.body.code,
          version: 'latest'
        }
      };
    }
    // c
    else if(req.body.langId==7){

        options = {
          method: 'POST',
          url: 'https://c-code-compiler.p.rapidapi.com/',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'e05b012b86msh66e2b351b7aba3cp10f0f9jsn95e4adfbca74',
            'X-RapidAPI-Host': 'c-code-compiler.p.rapidapi.com'
          },
          data: {
            code: req.body.code,
            version: 'latest'
          }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    // python
    else if(req.body.langId==0){

        options = {
          method: 'POST',
          url: 'https://python-3-code-compiler.p.rapidapi.com/',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'e05b012b86msh66e2b351b7aba3cp10f0f9jsn95e4adfbca74',
            'X-RapidAPI-Host': 'python-3-code-compiler.p.rapidapi.com'
          },
          data: {
            code: req.body.code,
            version: 'latest',
            input: null
          }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    // java
    else if(req.body.langId==8){

        options = {
          method: 'POST',
          url: 'https://java-code-compiler.p.rapidapi.com/',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'e05b012b86msh66e2b351b7aba3cp10f0f9jsn95e4adfbca74',
            'X-RapidAPI-Host': 'java-code-compiler.p.rapidapi.com'
          },
          data: {
            code: req.body.code,
            version: 'latest'
          }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    // javascript
    else if(req.body.langId==4){
        options = {
            method: 'POST',
            url: 'https://code-compiler.p.rapidapi.com/v2',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'x-rapidapi-host': 'code-compiler.p.rapidapi.com',
              'x-rapidapi-key': 'e05b012b86msh66e2b351b7aba3cp10f0f9jsn95e4adfbca74'
            },
            data: {LanguageChoice: '17', Program: req.body.code}
          };
    }
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
        //   res.json({msg:"testing execute code in try block"});
        let err;
        if(!response.data.cpuTime){
            err = true;
        }
        if(req.body.langId == 4){
            res.json({msg:response.data.Result,errr:err});
        }else{
            res.json({msg:response.data.output,errr:err});
        }
    } catch (error) {
          console.error(error);
          res.json({msg:"testing execute code in catch block"});
      }

    
})

module.exports=router;
