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



module.exports=app;