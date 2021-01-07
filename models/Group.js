const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
clubName: {
    type: String, 
    required: true
},

users: [
    {     
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    
groupWatchList: [
    {
    type: Schema.Types.ObjectId,
    ref: "GroupWatchList"
    }
]

});

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;
