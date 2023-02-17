const Film = require('../models/film');

module.exports = {
  create,
  delete: deleteReview
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
}