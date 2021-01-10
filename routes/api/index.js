const router = require("express").Router();
const commentRoutes = require("./comments");
const userRoutes = require("./user");
const groupRoutes = require("./group");
const watchListRoutes = require("./watchlist");
const movieRoutes = require("./movie");

// comments routes
router.use("/comments", commentRoutes);
// user routes
router.use("/user", userRoutes);
// group routes
router.use("/group", groupRoutes);
//watchlist routes
router.use("/watchlist", watchListRoutes);
//movie routes
router.use("/movie", movieRoutes);

module.exports = router;
