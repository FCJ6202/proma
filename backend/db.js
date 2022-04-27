const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost:27017/Proma?readPreference=primary&appname=MongoDB%20Compass&ssl=false"



const connectToDatabase = () =>{
    mongoose.connect(mongoUrl,() =>{
        console.log("database connected successfully");
    })
}

module.exports = connectToDatabase;