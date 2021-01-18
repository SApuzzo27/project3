const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// Matches with "/api/movie"
router.route("/").get(movieController.findAll);
router.route("/user/:id").get(movieController.findByUser);
router.route("/movie/:id").get(movieController.findById);

router.route("/create").post(movieController.create);
router.route("/adduser").post(movieController.addUser);
router.route("/addcomment").post(movieController.addComment);

module.exports = router;
