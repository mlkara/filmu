const Film = require('../models/film');

module.exports = {
  create,
  delete: deleteReview,
  edit, 
  update
};

function deleteReview(req, res, next) {
  Film.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  }).then(function (film) {
    if (!film) return res.redirect('/films');
    film.reviews.remove(req.params.id);
    film.save().then(function () {
      res.redirect(`/films/${film._id}`);
    }).catch(function (err) {
      return next(err);
    });
  });
}

function create(req, res) {
  Film.findById(req.params.id, function (err, film) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    film.reviews.push(req.body);
    film.save(function (err) {
      res.redirect(`/films/${film._id}`);
    });
  });
};

function edit(req, res) {
  Film.findOne({'reviews._id': req.params.id}, function(err, film) {
    const review = film.reviews.id(req.params.id);
    res.render('reviews/edit', {review});
  });
};

function update(req, res) {
  Film.findOne({'reviews._id': req.params.id}, function(err, film) {
    const reviewSubdoc = film.reviews.id(req.params.id);
    if (!reviewSubdoc.user.equals(req.user._id)) return res.redirect(`/films/${film._id}`);
    reviewSubdoc.content = req.body.content;
    film.save(function(err) {
      res.redirect(`/films/${film._id}`);
    });
  });
};
