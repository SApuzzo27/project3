const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// Matches with "/api/group"
router.route("/").get(movieController.findAll);

module.exports = router;
