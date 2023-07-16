const express=require('express');
const mongoose=require('mongoose');

//Create app
const app=express();

(async ()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017/anik");
    console.log("DB Connected");

    app.listen(4000,()=>{
        console.log('Server is listening on PORT 4000')
    })

    }catch(error){
console.log('Error',error);
throw error;
    }
})()