const router = require("express").Router();
const apiRoutes = require("./api_routes");

router.use("/api", apiRoutes);

router.use((req, res) => {
    return res.send("wrong route!");
})

module.exports = router;