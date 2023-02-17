const Film = require("../models/film");
const Soundtrack = require("../models/soundtrack");

module.exports = {
  index,
  show,
  new: newFilm,
  create
};

function index(req, res) {
  Film.find({}).sort('title').exec(function (err, films) {
    res.render("films/index", { title: "All Films", films });
  });
}

function show(req, res) {
  Film.findById(req.params.id, function (err, film) {
    Soundtrack.find({ film: film._id }, function (err, soundtracks) {
      res.render("films/show", { film, title: "Film Details", soundtracks });
    });
  });
}

function newFilm(req, res) {
  res.render("films/new", { title: "Add Film" });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const film = new Film(req.body);
  console.log(req.body);
  film.save(function (err) {
    console.log(film)
    console.log(err)
    if (err) return res.redirect("/films/new");
    console.log(film);
    res.redirect(`/films/${film._id}`);
  });
}


