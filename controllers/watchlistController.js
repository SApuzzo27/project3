const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.WatchList.find(req.query)
      .then((dbWatchlist) => res.json(dbWatchlist))
      .catch((err) => res.status(422).json(err));
  },
  addListItem: function (req, res) {
    db.WatchList.updateOne(
      { _id: req.params.id },
      { $push: { title: req.body } }
    );
  },
  deleteListItem: function (req, res) {
    db.WatchList.deleteOne({ _id: req.params.id });
  },
};
