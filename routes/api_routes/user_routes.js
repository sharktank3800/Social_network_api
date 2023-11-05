// import dependencies and controllers
const router = require("express").Router();

// import User controller Obj, containing methods for handling api req related to User and deconstruct Obj to use the methods in our routes
const {
    AllUsers,
    UserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend
} = require("../../controllers/user_controller")


// GET and POST All users route
router.route("/").get(AllUsers).post(createUser);

// GET, PUT and DELETE user by ID route
router.route("/:userId").get(UserById).put(updateUserById).delete(deleteUserById);

// POST and DELETE friend route
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);



// export router
module.exports = router;