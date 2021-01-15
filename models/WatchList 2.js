const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WatchListSchema = new Schema({
  username: { type: String },
  clubName: { type: String },
  titles: { type: Array, required: true },
});

const WatchList = mongoose.model("WatchList", WatchListSchema);

module.exports = WatchList;
