const mongoose = require('mongoose');
const { Schema } = mongoose;

const RepoSchema = new Schema({
    repoName : {
        type : String,
        required : true,
    },

    createrName : {
        type : String,
        required : true
    },

    createrId : {
        type : String,
        required : true
    },

    joinedUserId : {
        type : Object
    },
    
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Repo', RepoSchema);