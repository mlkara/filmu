const express = require('express');
const router = express.Router();
const soundtracksCtrl = require('../controllers/soundtracks');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/films/:id/soundtracks/new', ensureLoggedIn, soundtracksCtrl.new);
router.get('/soundtracks/:id', ensureLoggedIn, soundtracksCtrl.show)
router.post('/films/:id/soundtracks', ensureLoggedIn, soundtracksCtrl.create);

module.exports = router;