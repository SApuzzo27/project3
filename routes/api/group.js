const router = require("express").Router();
const groupController = require("../../controllers/groupsController");

// Matches with "/api/group"
router.route("/").get(groupController.findAll);

module.exports = router;
