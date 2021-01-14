const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  findByName: function (req, res) {
    db.User.findOne({ username: req.params.id })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(500).json(err));
  },
  addGroup: function (req, res) {
    // // require auth => skipping for now
    // if(!req.user) {
    //   return res.status(401).end("No authentication")
    // }
    db.User.updateOne({ _id: req.params.id }, { $push: { clubName: req.body } })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(500).json(err));
  },
  addMovie: function (req, res) {
    // // require auth => skipping for now
    // if(!req.user) {
    //   return res.status(401).end("No authentication")
    // }
    db.User.updateOne({ _id: req.params.id }, { $push: { Movies: req.body } })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(500).json(err));
  },
  addWatchlist: function (req, res) {
    db.User.updateOne(
      { _id: req.params.id },
      { $push: { WatchList: req.body } }
    )
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(500).json(err));
  },
};
