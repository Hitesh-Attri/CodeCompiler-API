const express=require("express")
const router=express.Router()
app = express();
const session = require("express-session")//

const dir="e:\\study\\CLG\\Y3 S6\\DP";

app.use(session({
    secret: 'keyboard cat',//encoding
    resave: false,//for every request to    server even if req is from same user or browser it resetssession cookie 
    saveUninitialized: false,//if something not added then no sessions would b created
    //cookie sec//the session cookie will be considered third party and blocked by your browser
}))

router.get("/",(req, res) =>{
    res.sendFile(dir+"/public/html/compiler.html");
});

module.exports=router;