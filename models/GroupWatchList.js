const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupWatchListSchema = new Schema({
clubName: [
    {
    type: Schema.Types.ObjectId,
    ref: "Group"
    }
], 

watchList: {  
    type: Array,
}

});

const GroupWatchList = mongoose.model("GroupWatchList", GroupWatchListSchema);

module.exports = GroupWatchList;