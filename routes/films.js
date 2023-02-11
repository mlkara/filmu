const express = require('express');
const router = express.Router();
const filmsCtrl = require('../controllers/films');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', filmsCtrl.index);
router.get('/new', ensureLoggedIn, filmsCtrl.new);
router.get('/:id', filmsCtrl.show);
router.post('/', ensureLoggedIn, filmsCtrl.create);

module.exports = router;
