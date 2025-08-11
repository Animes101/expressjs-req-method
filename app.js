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

const myMidilWere=(req,res,next)=>{


      const { username, password } = req.body;

    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4}$/;

    if (!pattern.test(password)) {
        // Password invalid হলে response পাঠাও এবং next() কল করো না
        return res.status(400).send('Password must be letter, number and exactly 4 characters');
    }
    
    // যদি password ঠিক থাকে, তাহলে next() কল করো
     next();


}

app.post('/register',myMidilWere, (req,res)=>{


    const { username, password } = req.body;

    // সাধারণত এখানে ইউজার ডাটাবেজে সেভ করার কোড থাকবে

    res.status(201).send(`User created: Username - ${username}, Password - ${password}`);

    

})

module.exports=app;