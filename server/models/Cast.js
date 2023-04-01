const { Schema, model } = require('mongoose');

const castSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
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

const Cast = model('Cast', castSchema);

module.exports = Cast;
