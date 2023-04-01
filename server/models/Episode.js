const { Schema, model } = require('mongoose');

const episodeSchema = new Schema({
  episodeNumber: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnailImg: {
    type: String,
    required: true,
  },
  headerImg: {
    type: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Episode = model('Episode', episodeSchema);

module.exports = Episode;
