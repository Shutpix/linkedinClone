const express=require('express');
const passport=require('passport');
const mongoose=require('mongoose');
const port=8080;
const app=express();




app.listen(port,()=>{
    if(err){
        console.log('Error in starting the server',err);
    }
    console.log('Server is running on port :', port);
})