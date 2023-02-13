const Soundtrack = require('../models/soundtrack');
const Film = require('../models/film');

module.exports = {
  new: newSoundtrack,
  create,
  addToDetails
};

function create(req, res) {
  Soundtrack.create(req.body, function (err, soundtrack) {
    res.redirect('/soundtracks/new');
  });
}

function newSoundtrack(req, res) {
  Soundtrack.find({})
    .sort('album')
    .exec(function (err, soundtracks) {
      res.render('soundtracks/new', {
        title: 'Add Soundtrack',
        soundtracks
      });
    });
}

function addToDetails(req,res) {
  Film.findById(req.params.id,function(err,film) {
    film.soundtrack.push(req.body.soundtrackId)
    film.save(function(err) {
    res.redirect(`/flights/${film._id}`)
  })
})
}
