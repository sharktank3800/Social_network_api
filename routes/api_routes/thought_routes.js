// import dependencies and controllers
const router = require("express").Router();

// import User controller Obj, containing methods for handling api req related to User and deconstruct Obj to use the methods in our routes
const {
    AllThoughts,
    ThoughtsById,
    createThought,
    deleteThought,
    updateThoughtbyId,
    createReaction,
    deleteReaction
} = require("../../controllers/thought_controller");

// GET and POST all thoughts route
router.route("/").get(AllThoughts).post(createThought);


// GET, PUT and DELETE thoughts route
router.route("/:thoughtId").get(ThoughtsById).put(updateThoughtbyId).delete(deleteThought);


//POST reaction to thought route
router.route("/:thoughtId/reactions").post(createReaction);

// DELETE reaction to thought route
router.route("/:thoughtId/reactions/:reactionsId").delete(deleteReaction);


// export router
module.exports = router;