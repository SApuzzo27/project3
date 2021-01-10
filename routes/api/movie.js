const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// Matches with "/api/movie"
router.route("/").get(movieController.findAll);
router.route("/:id").get(movieController.fineById);

router.route("/create").post(movieController.create);
router.route("/adduser").post(movieController.addUser);
router.route("/addcomment").post(movieController.addComment);

module.exports = router;
