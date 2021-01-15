const router = require("express").Router();
const watchListController = require("../../controllers/watchlistController");

// route for /api/watchlist
router.route("/").get(watchListController.findAll);

module.exports = router;
