const { Schema, model } = require('mongoose');

const showSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnailImg: {
    type: String,
    required: true,
  },
  headerImg: {
    type: String,
    required: true,
  },
  currSeasonNum: {
    type: String,
    required: true,
  },
  totleSeasons: {
    type: String,
    required: true,
  },
  nextSeason: {
    type: String,
  },
  newEpisodes: {
    type: String,
  },
  releaseDate: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  likes: {
    type: Number,
  },

  seasons: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Season',
    },
  ],
  userFavorites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Show = model('Show', showSchema);

module.exports = Show;
