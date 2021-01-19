const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    console.log(req.query);
    db.Movie.find(req.query)
      .then((dbMovie) => res.json(dbMovie))
      .catch((err) => res.status(422).json(err));
  },
  findByUser: function (req, res) {
    console.log(req.params.id);
    db.Movie.find({ username: req.params.id })
      .then((dbMovie) => res.json(dbMovie))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Movie.findById(req.params.id)
      .then((dbMovie) => res.json(dbMovie))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    // // require auth => skipping for now
    // if(!req.user) {
    //   return res.status(401).end("No authentication")
    // }
    const currentUser = req.params.id;
    const imdbID = req.body.imdbID;
    console.log("currentUser", currentUser);
    console.log("imdbID", imdbID);
    db.Movie.findOne({ imdbID: imdbID }, (err, result) => {
      if (err) console.log(err);
      if (result) {
        console.log("Movie already saved");
      } else {
        db.Movie.create({ ...req.body })
          .then((dbMovie) => {
            console.log(dbMovie.title);
          })
          .then((dbMovie) => res.json(dbMovie))
          .catch((err) => res.status(401).json(err));
      }
    }).then(
      db.Movie.findOne({ imdbID: imdbID }, (err, result) => {
        if (err) console.log(err);
        console.log("line 43", result);
        if (result.username.includes(currentUser)) {
          console.log("User already added");
        } else {
          console.log("adding", currentUser);
          db.Movie.findOne({ imdbID: imdbID }).then((dbMovie) => {
            dbMovie
              .updateOne({ $push: { username: currentUser } })
              .then((dbMovie) => res.json(dbMovie))
              .catch((err) => res.status(401).json(err));
          });
        }
      })
        .then((dbMovie) => res.json(dbMovie))
        .catch((err) => res.status(401).json(err))
    );
  },
  addUser: function (req, res) {
    // // require auth => skipping for now
    // if(!req.user) {
    //   return res.status(401).end("No authentication")
    // }
    db.Movie.updateOne(
      { _id: req.params.id },
      { $push: { username: req.body } }
    )
      .then((dbMovie) => res.json(dbMovie))
      .catch((err) => res.status(500).json(err));
  },
  addComment: function (req, res) {
    db.Movie.updateOne(
      { _id: req.params.id },
      { $push: { comments: req.body } }
    )
      .then((dbMovie) => res.json(dbMovie))
      .catch((err) => res.status(500).json(err));
  },
};
