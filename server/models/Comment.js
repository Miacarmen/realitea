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
 // use ReplySchema to validate data for a reply
 replies: [replySchema],

 // set up a virtual to get total reply count
 replyCount: {
     type: Number,
     default: 0,
 },

    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    // set up a virtual to get total like count
    likeCount: {
        type: Number,
        default: 0,
    },
    // set up a virtual to get total dislike count
    dislikeCount: {
        type: Number,
        default: 0,
    },
    dislikes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
   
// set up replies as a virtual
    responses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],

    // set up relationship to User & Show, Cast, Season, and Episode models
    // use Mongoose's ObjectId data type
    // ref property tells Comment model which documents to search to find right comment
    // ref property allows us to use populate() method to populate a comment's user and show details when we query a comment
    
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

const Comment = model('Comment', commentSchema);

module.exports = Comment;