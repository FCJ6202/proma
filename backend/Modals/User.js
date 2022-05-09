const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true,
    },

    createRepo : {
        type : Array,
        default : []
    },

    joinRepo : {
        type : Array,
        default : []
    },

    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);