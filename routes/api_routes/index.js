// router instance
const router = require("express").Router();

// import user and thought routes
const user_routes = require("./user_routes");
const thought_routes = require("./thought_routes");

// endpoints for user and thought routes
router.use("/user", user_routes);
router.use("/thought", thought_routes);

// export router
module.exports = router;