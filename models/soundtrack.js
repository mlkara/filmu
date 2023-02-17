const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const soundtrackSchema = new Schema({

  songTitle: {
    type: String,
    required: true
  },

  artistName: {
    type: String,
    required: true
  },

  trackUrl: {
    type: String,
  },

  film: {
    type: Schema.Types.ObjectId,
    ref: 'Film',
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String,

}, {
  timestamps: true
});

module.exports = mongoose.model('Soundtrack', soundtrackSchema);