const express=require('express');
const bodyParser=require('body-parser');
// here we will require the port
const {PORT}=require('./config/serverConfig');
const setupAndStartServer= async()=>{
    // create express object
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    // start the app
    app.listen(PORT,()=>{
      console.log(`Server started at ${PORT}`);  //here we have done string interpolation
    });
}
setupAndStartServer();