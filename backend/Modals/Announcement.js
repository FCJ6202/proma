const mongoose = require('mongoose');
const { Schema } = mongoose;

const AnnounceSchema = new Schema({

    RepoId : {
        type : String,
        required : true
    },

    text : {
        type : String,
        required : true
    },

    materials : {
        type : Array,
        default : []
    },

    CreaterName : {
        type : String,
        required : true
    },

    CreaterUserId : {
        type : String,
        required : true
    },
    
    CreationTime : {
        type : Date,
        default : Date.now
    },

    UpdationTime : {
        type : Date,
        default : Date.now
    },

    Type : {
        type : String,
        required : true 
    }
});

module.exports = mongoose.model('Announce', AnnounceSchema);