// import User and Thought models from their individual files
const  User = require("./User");
const Thought = require("./Thought");

// export them as a single module for easy access
module.exports = {
    User,
    Thought
}