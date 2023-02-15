const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});


const soundtrackSchema = new Schema({
  albumTitle: {
    type: String,
    required: true
  },

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

   reviews: [reviewSchema],

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