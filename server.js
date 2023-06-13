const express = require('express')
const session = require('express-session');

const app = express();
const port = process.env.PORT || 5000;

app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine','ejs');
app.use(express.json()); 
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'))

// const compilerRoute=require('./routes/compiler')
const executeCodeRoute=require('./routes/executeCode')

app.route('/').get((req,res)=>{
    // console.log(req.session)
    // console.log(__dirname)
    // if(!req.session.login) res.render('login', {loggedOut: 0, msg:"",phrase: ""});
    // else res.render("discussion",{username: req.session.name})

    res.sendFile(dir+"/public/html/compiler.html");
})

// app.use("/compiler", compilerRoute);
app.use("/executeCode", executeCodeRoute);

app.get('*',(req,res)=>{
    res.render('404');
});

app.listen(port,(error)=>{
    // if(!error) console.log("main--> Server running at port,", port);
    if(!error) console.log(`App listening at http://localhost:${port}`)
    else console.log("Error! ", error);
})