const Soundtrack = require('../models/soundtrack');
const Film = require('../models/film');

module.exports = {
  // index,
  new: newSoundtrack,
  create,
};

// function index(req, res) {
//   Soundtrack.find({}, function(err, soundtracks) {
//     res.render('soundtracks/index', { title: 'All Soundtracks', soundtrack});
//   })
// }

function newSoundtrack(req, res) {
  res.render('soundtracks/new', { title: 'Add Soundtrack' });
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

