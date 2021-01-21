const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Group.find(req.query)
      .then((dbGroup) => res.json(dbGroup))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Group.findById(req.params.id)
      .then((dbGroup) => res.json(dbGroup))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    // // require auth => skipping for now
    // if(!req.user) {
    //   return res.status(401).end("No authentication")
    // }
    db.Group.create({ ...req.body })
      .then((dbGroup) => res.json(dbGroup))
      .catch((err) => res.status(401).json(err));
  },
  addUser: function (req, res) {
    // // require auth => skipping for now
    // if(!req.user) {
    //   return res.status(401).end("No authentication")
    // }
    const groupID = req.body._id;
    const currentUser = req.params.id;
    db.Group.findOneAndUpdate(
      { _id: groupID },
      { $push: { username: currentUser } }
    )
      .then((dbGroup) => res.json(dbGroup))
      .catch((err) => res.status(500).json(err));
  },
  addMovie: function (req, res) {
    // // require auth => skipping for now
    // if(!req.user) {
    //   return res.status(401).end("No authentication")
    // }
    db.Group.updateOne({ _id: req.params.id }, { $push: { Movies: req.body } })
      .then((dbGroup) => res.json(dbGroup))
      .catch((err) => res.status(500).json(err));
  },
  addWatchlist: function (req, res) {
    db.Group.findOne({ _id: req.params.id }) // /api/group/:id
      .then((dbGroup) => {
        dbGroup.populate(req.body.params.watchList);
      }) // json with the value
      .catch((err) => res.status(500).json(err));
  },
};
