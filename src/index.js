// require('dotenv').config({path:'./env'});
import dotevn from "dotenv";
import connectDB from "./db/db.js"
 connectDB();

 dotevn.config({path:'./env'});
 

 connectDB()
 .then(()=>{
  app.on("error",(error)=>{
    console.log("Error:",error);
  })
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`app is listening on port ${process.env.PORT}`);
  })
 })
 .catch((error)=>{
  console.log("Error connecting to MongoDB:", error);
 })

// import express from "express";
// const app = express();

// (async ()=>{
//   try{
// await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// app.on("error",(error) => {
//     console.log("Error:",error);
//     throw error
//   })
//   app.listen(process.env.PORT,()=>{
//     console.log`app is listening on port ${process.env.PORT}`;
//   })
// }catch(error){
//     console.error("ERROR:",error)
//     throw error
//   }
// })()