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

    const imdbID = req.body.imdbID;
    const filter = { imdbID: imdbID };

    db.Movie.findOne(filter, (err, result) => {
      if (err) console.log(err);
      if (result) {
        //the movie exists
        console.log("Movie already saved");
        res.json(result);
      } else {
        //movie does not exist in mongo
        db.Movie.create({ ...req.body })
          .then((dbMovie) => res.json(dbMovie))
          .catch((err) => res.status(401).json(err));
      }
    });
  },
  addUser: function (req, res) {
    // // require auth => skipping for now
    // if(!req.user) {
    //   return res.status(401).end("No authentication")
    // }
    const imdbID = req.body.imdbID;
    const currentUser = req.params.id;
    const filter = { imdbID: imdbID, username: currentUser };

    db.Movie.findOne(filter, (err, result) => {
      if (err) console.log(err);
      if (result) {
        console.log("User already added");
        res.json(result);
      } else {
        db.Movie.findOneAndUpdate(
          { imdbID: imdbID },
          { $push: { username: currentUser } },
          { new: true }
        )
          .then((dbMovie) => res.json(dbMovie))
          .catch((err) => res.status(500).json(err));
      }
    });
  },
  removeUser: function (req, res) {
    const imdbID = req.body.imdbID;
    const currentUser = req.params.id;
    const filter = { imdbID: imdbID };
    db.Movie.findOneAndUpdate(
      filter,
      { $pull: { username: currentUser } },
      { multi: true }
    );
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
