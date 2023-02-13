const express = require('express');
const router = express.Router();
const soundtracksCtrl = require('../controllers/soundtracks');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/soundtracks/new', ensureLoggedIn, soundtracksCtrl.new);
router.post('/soundtracks', ensureLoggedIn, soundtracksCtrl.create);

module.exports = router;``