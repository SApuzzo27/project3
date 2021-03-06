const router = require("express").Router();
const groupController = require("../../controllers/groupsController");

// Matches with "/api/group"
router.route("/").get(groupController.findAll);
router.route("/:id").get(groupController.findById);

router.route("/adduser/:id").post(groupController.addUser);
router.route("/removeuser/:id").post(groupController.removeUser);
router.route("/addmovie/:id").post(groupController.addMovie);
router.route("/addwatchlist/:id").post(groupController.addWatchlist);

module.exports = router;
