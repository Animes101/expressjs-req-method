const express=require('express');

const router=express.Router();



router.get('/user', (req,res)=>{

    res.send('user route success fully')
})


router.post('/user/:id', (req,res)=>{

    const id=req.params.id;
    res.send(`request id is ${id}`);
})


router.get('/user/query', (req,res)=>{

    const {id, name}=req.query;

    res.send(`user route success fully for id: ${id} and name: ${name}`)
})

module.exports=router;