const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const soundtrackSchema = new Schema({
  album: {
    type: String,
    required: true,
    unique: true
  },

    artist: {
      type: String,
      required: true,
      unique: true
    },
    
    releaseYear: {
        type: Number,
        default: function() {
            return new Date().getFullYear();
        },
        min: 1927
    },
    
    label: {
      type: String,
      required: true,
      unique: true
    },
    
}, {
  timestamps: true
});

module.exports = mongoose.model('Soundtrack', soundtrackSchema);