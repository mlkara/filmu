const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const filmSchema = new Schema({
  title: {
    type: String,
    required: true
  },

soundtracks: [{
  type: Schema.Types.ObjectId, 
  ref: 'Soundtrack'
}],

}, {
  timestamps: true
});

module.exports = mongoose.model('Film', filmSchema);