const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],

    dislikes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],

    responses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
    
    // set up relationship to User & Show models
    showId: {
        type: Schema.Types.ObjectId,
        ref: 'Show',
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    episodeId: {
        type: Schema.Types.ObjectId,
        ref: 'Episode',
    },
    seasonId: {
        type: Schema.Types.ObjectId,
        ref: 'Season',
    },
    castId: {
        type: Schema.Types.ObjectId,
        ref: 'Cast',
    },

});