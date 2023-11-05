const { Types } = require("mongoose");
const {Thought, User, Reaction} = require("../models");


// ThoughtController obj, containing methods for handling different api req related to thoughts
const ThoughtController = {
    async AllThoughts(req, res){
        try {
            const thoughts = await Thought.find({});

            res.json(thoughts)
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Get thought by ID handler
    async ThoughtsById(req, res){
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId});

            if(!thought){
                return res.status(404).json({message: "Not found"});
            }

            return res.json(thought);

        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Create thought handler
    async createThought(req, res){
        try {
            const thought = await Thought.create(req.body);
            res.status(201).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },


    // Delete thought handler
    async deleteThought(req, res){
        try {
            const thought = await Thought.findByIdAndDelete({_id: req.params.thoughtId});
            res.status(201).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },


    // Update thought by ID handler
    async updateThoughtbyId(req, res){
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
                new: true
            })

            if (!thought) {
                return res.status(404).json({message: "Not found Failed to update"});
            }

            return res.status(201).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },


    // Create reaction handler
    async createReaction(req, res){
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$addToSet: {reactions: req.body}},
                {runValidators: true, new: true}
            )

            thought ? res.json(thought) : res.status(404).json({message: "Not found"})
        } catch (error) {
            res.status(500).json(error)
        }
    },


    // Delete reaction handler
    async deleteReaction(req, res){
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {runValidators: true, new: true}
            )

            thought ? res.json(thought) : res.status(404).json({message: "Not found"})
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

// export ThoughtController
module.exports = ThoughtController;