const db = require("../models");

module.export = {
  findAll: function (req, res) {
    db.Group.find(req.query)
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
    db.Group.updateOne({ _id: req.params.id }, { $push: { users: req.body } })
      .then((dbGroup) => res.json(dbGroup))
      .catch((err) => res.status(500).json(err));
  },
};
