const Soundtrack = require('../models/soundtrack');
const Film = require('../models/film');

module.exports = {
  new: newSoundtrack,
  create,
  show, 
};


function newSoundtrack(req, res) {
  Film.find({}, function(err, film) {
    res.render('soundtracks/new', {title: 'Soundtrack Title', film, filmId: req.params.id})
  })
}

function create(req, res) {
  var trackUrl = req.body.trackUrl
  var match = trackUrl.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);
  if (match && match[1].length == 11) {
  var embeddedUrl = `https://www.youtube.com/embed/${match[1]}`
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  req.body.trackUrl = embeddedUrl
  req.body.film = req.params.id
  }
  const soundtrack = new Soundtrack(req.body);
  soundtrack.save(function(err) {
    if (err) return res.redirect('/soundtracks/new');
    console.log(soundtrack);
    res.redirect(`/films/${req.params.id}`);
  });
};

function show(req, res) {
  Soundtrack.findById(req.params.id, function (err, soundtrack) {
  res.render("soundtracks/show", { title: "Soundtrack Details", soundtrack });
  });
}
