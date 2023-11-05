// import dependencies from mongoose library
const { Schema, model, Types } = require("mongoose");

// defining User schema with fields required and their data types
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // using regex to validate email format

    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
            v
          );
        },
      },
    },

    friends: [
      {
        type: String.Types.ObjectId,
        ref: "User",
      },
    ],

    thoughts: [
      {
        type: String.Types.ObjectId,
        ref: "Thought",
      },
    ],
  },

  {
    toJson: {
      virtuals: true, //When a user document is transformed inot JSON format this enables virtual properties be displayed
    },

    id: false, //default "_id" field in User model to be returned when calling toJson() method
  }
);

// defining virtual property "friendCount" which returns number of friends in friends array
userSchema.virtual("friendCount").get(function(){
    return this.friends.length;
});

// creating User model from the userSchema
const User = model("User", userSchema)

// export User model as module
module.exports = User;