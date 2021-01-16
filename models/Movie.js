const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

const MovieSchema = new Schema(
  {
    // all the stuff from omdb
    title: {
      type: String,
      required: true,
    },
    year: { type: String },
    rated: { type: String },
    genre: { type: String },
    runtime: { type: String },
    director: { type: String },
    actors: { type: String },
    plot: { type: String },
    poster: { type: String },
    type: { type: String },
    imdbID: { type: String },

    username: [
      {
        type: Array,
        ref: "User",
      },
    ], //all the users who added the movie
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  opts
);

MovieSchema.virtual("addedBy").get(function () {
  return this.username[0];
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
