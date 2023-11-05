const {User} = require("../models");


// UserController obj, containing methods for handling different api req related to Users
const UserController = {

    // Get All users handler
    async AllUsers(req, res){
        try {
            const userData = await User.find({});
            res.json(userData);
        } catch (error) {
            res.status(500).json(error)
        }
    },


    // Get one user by ID handler
    async UserById(req, res){
        try {
            const userData = await User.findById(req.params.userId);
            res.json(userData);
        } catch (error) {
            res.status(500).json(error)
        }
    },


    // Create  user handler
    async createUser(req, res){
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (error) {
            res.status(500).json(error)
        }
    },


    // Update user by ID
    async updateUserById(req, res){
        try {
            const userData = await User.findOneAndUpdate(req.params.id, req.body, {new: true})
            userData ? res.json(userData) : res.status(404).json({message: "Failed to update User not found"});
        } catch (error) {
            res.status(500).json(error);
        }
    },


    // Delete user handler
    async deleteUserById(req, res){
        try {
            const userData = await User.findOneAndDelete(req.params.id);
            userData ? res.json(userData) : res.status(404).json({message: "Failed to delete User not found"})
        } catch (error) {
            res.status(500).json(error)
        }
    },


    // Add friend to users friend list handler
    async addFriend(req, res){
        try {
            const userData = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet: {friends: req.body.friendId || req.params.friendId}},
                {new: true}
            )
            userData ? res.json(userData) : res.status(404).json({message: "Failed to add friend User not found" })
        } catch (error) {
            res.status(500).json(error)
        }
    },


    // Remove friend from users friend list
    async removeFriend(req, res){
        try {
            const dbUserData = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$pull: {friends: req.params.friendId}},
                {new: true}
            )

            if (!dbUserData) {
                return res.status(404).json({message: "No User found with this id"})
            }
            // validating if friend was removed
            const removed = !dbUserData.friends.includes(req.params.friendId);
            removed ? res.json({message: "Friend removed successfully"}) : res.json(dbUserData);
        } catch (error) {
            res.status(400).json(error)
        }
    }
};


// export UserController
module.exports = UserController;