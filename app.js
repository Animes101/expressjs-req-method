const express=require('express')
const bodyParser = require('body-parser')
const userRouter = require('./router/user.router');
const app=express()




app.use(userRouter);

app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.json())

app.post('/login',(req,res)=>{

    const {name,password}=req.body


res.send(`${name} password ${password}`)


})


app.get('/register', (req,res)=>{

    res.sendFile(__dirname + '/views/reginter.html');

})

app.post('/register', (req,res)=>{

    const {username,password}=req.body;

    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4}$/;
     

    if(pattern.test(password)){
      

        res.send(`Username: ${username}, Password: ${password}`);

    }else{

        res.send('password must be letter number and 4 character')
    }

})

module.exports=app;