const express=require('express');
// here we will require the port
const {PORT}=require('./config/serverConfig');
const setupAndStartServer= async()=>{
    // create express object
    const app=express();
    // start the app
    app.listen(PORT,()=>{
      console.log(`Server started at ${PORT}`);  //here we have done string interpolation
    });
}
setupAndStartServer();