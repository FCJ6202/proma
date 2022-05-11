const mongoose = require('mongoose');
require("dotenv").config();
const mongoUrl = `mongodb+srv://FCJ1234:kY7DydCrlFfo7OaI@cluster0.zwfl2.mongodb.net/proma?retryWrites=true&w=majority`// ye maindatabase
//const mongoUrl = "mongodb://localhost:27017/Proma?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const Key = process.env.REACT_APP_USER_PASS;



// const connectToDatabase = () =>{
//     mongoose.connect(mongoUrl,{
//         //useNewUrlParser : true,
//         //useUnifiedTopology : true
//     },() =>{
//         console.log("database connected successfully");
//         //console.log(mongoUrl)
//         //console.log(Key)
//     })
// }

const connectToDatabase = () =>{
    mongoose.connect(mongoUrl,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    },() =>{
        console.log("database connected successfully");
        //console.log(mongoUrl)
        //console.log(Key)
    })
}

module.exports = connectToDatabase;