const { Schema, model } = require('mongoose');

const seasonSchema = new Schema({
  seasonNumber: {
    type: Number,
    required: true,
  },
  nextSeason: {
    type: String,
  },
  episodes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Episode',
    },
  ],
  castMembers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'CastMember',
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Season = model('Season', seasonSchema);

module.exports = Season;
