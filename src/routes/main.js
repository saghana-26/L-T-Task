const express= require('express')
const restRouter= express.Router()
const registerModel= require('../models/userdata');
restRouter.get('',async(req,res) =>{
    res.render('index',{title:"web"});
});
restRouter.get('/index',async(req,res) =>{
    res.render('index',{title:"web"});
}); 
restRouter.get('/home',async(req,res) =>{
    res.render('home',{title:"web"});
});
restRouter.get('/home',async(req,res) =>{
    try{
        //const email=req.body.email;
        const userdata= await registerModel.findOne({mail:req.body.email});
          res.render('home',{user:userdata});
    }catch(error){
      console.log('err'+ error);
    }

});
module.exports= restRouter;