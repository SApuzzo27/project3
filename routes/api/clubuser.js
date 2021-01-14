const router = require("express").Router();
const clubUserController = require("../../controllers/clubUserController");

// Matches with "/api/clubuser"
router.route("/").get(clubUserController.findAll);
router.route("/:id").get(clubUserController.findByName);

module.exports = router;
