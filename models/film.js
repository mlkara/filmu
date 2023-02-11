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

const filmSchema = new Schema({
  title: {
    type: String,
    required: true
  },

director: {
    type: String,
    required: true
},

releaseYear: {
    type: Number,
    default: function() {
        return new Date().getFullYear();
    },
    min: 1927
},

  cast: {
    name: {
    type: String,
    required: true,
    unique: true
  },
},

  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Film', filmSchema);