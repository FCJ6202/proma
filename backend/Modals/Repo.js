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

    Admin : {
        type : Array,
        default : []
    },

    Member : {
        type : Array,
        default : []
    },

    Annoucement : {
        type : Array,
        default : []
    },

    Assignment : {
        type : Array,
        default : []
    },
    
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Repo', RepoSchema);