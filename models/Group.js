const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  clubName: {
    type: String,
    required: true,
  },

  username: [
    {
      type: String,
      ref: "User",
    },
  ],

  WatchList: [
    {
      type: Schema.Types.ObjectId,
      ref: "WatchList",
    },
  ],
  Movies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
  // watchedMovies: [
  //   {
  //     //voting?
  //     //virtual???
  //   },
  // ],
});

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;
