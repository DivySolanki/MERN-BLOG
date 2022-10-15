const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        desc: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: false
        },
        username: {
            type: String,
            required: true
        },
        categories: {
            type: Array,
            required: false
        },
        liked: {
            type: Array,
            ref: "User",
            required: false
        },
    }, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);