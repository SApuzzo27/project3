const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupWatchListSchema = new Schema({
clubName: [
    {
    type: Schema.Types.ObjectId,
    ref: "Group"
    },
], 

// watchList: {  
//     type: Array,
// }
title: { type: String, required: true},
date: { type: Date, default: Date.now },
});



const GroupWatchList = mongoose.model("GroupWatchList", GroupWatchListSchema);

module.exports = GroupWatchList;