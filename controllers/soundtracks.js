const Soundtrack = require('../models/soundtrack');
const Film = require('../models/film');

module.exports = {
  new: newSoundtrack,
  create,
};


function newSoundtrack(req, res) {
  Film.find({}, function(err, film) {
    res.render('soundtracks/new', {title: 'Soundtrack Title', film, filmId: req.params.id})
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const soundtrack = new Soundtrack(req.body);
  soundtrack.save(function(err) {
    if (err) return res.redirect('/soundtracks/new');
    console.log(soundtrack);
    res.redirect(`/soundtracks/${soundtrack._id}`);
  });
}

