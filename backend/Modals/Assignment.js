const mongoose = require('mongoose');
const { Schema } = mongoose;

const AssignmentSchema = new Schema({

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

    title : {
        type : String,
    },

    points : {
        type : String
    },

    dueDate : {
        type : String
    },

    dueTime : {
        type : String
    },

    isSubmitted : {
        type : String
    },

    submitDate : {
        type : String
    },

    submitTime : {
        type : String
    },
    Type : {
        type : String,
        required : true 
    }
});

// {
//     "courseId": "1",
//     "id":"1",
//     "text": "Please find the attachment of the Test Paper.",
//     "materials": [{"name":"testpaper","link":" https://cseweb.ucsd.edu/~goguen/courses/130/midterm.pdf"},{"name":"log sheet","link":" https://wikieducator.org/images/4/41/Logrithm_Table.pdf"}], 
//     "creatorName":"Dr Anshu",
//     "creatorUserId": "string",
//     "creationTime":"2020-01-01",
//     "updateTime":"2020-01-01",
//     "title":"C2 Review Test",
//     "points":"10",
//     "dueDate":"2020-04-22",
//     "dueTime":"252",//fraction of day  https://stackoverflow.com/questions/538739/best-way-to-store-time-hhmm-in-a-database
//     "alternateLink": "classroom.proma/qeoqone",
//     "isSubmitted":"false",
//     "submitDate":"NULL",
//     "submitTime":"NULL",
//   }

module.exports = mongoose.model('Assign', AssignmentSchema);