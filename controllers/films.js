const Film = require('../models/film');
const Soundtrack = require('../models/soundtrack');

module.exports = {
  index,
  show,
  new: newMovie,
  create,
  addToDetails
};

function index(req, res) {
  Film.find({}, function(err, films) {
    res.render('films/index', { title: 'All Films', films });
  });
}

function show(req, res) {
  Film.findById(req.params.id)
    .populate('details')
    .exec(function(err, film) {
      Soundtrack.find(
        {_id: {$nin: film.detail}},
        function(err, soundtracks) {
          console.log(soundtracks);
          res.render('films/show', {
            title: 'Details',
            movie,
            soundtrack
          });
        }
      );
    });
}

function newFilm(req, res) {
  res.render('films/new', { title: 'Add Films' });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  };
  Film.create(req.body, (err) => {
    if(err) return res.render('films/new')
    res.redirect('/films')
  })
  };

  function addToDetails(req,res) {
    Film.findById(req.params.id,function(err,film) {
      film.soundtrack.push(req.body.soundtrackId)
      film.save(function(err) {
      res.redirect(`/flights/${film._id}`)
    })
  })
  }
  