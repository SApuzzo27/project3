const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserWatchListSchema = new Schema({
	username: { type: String, required: true },
    // list: { type: Array},
    title: { type: String, required: true},
	date: { type: Date, default: Date.now },
});

const UserWatchList = mongoose.model("UserWatchList", UserWatchListSchema);

module.exports = UserWatchList;
