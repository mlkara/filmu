const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/films/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
router.get('/reviews/:id/edit', ensureLoggedIn, reviewsCtrl.edit);
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);
router.put('/reviews/:id', ensureLoggedIn, reviewsCtrl.update);

module.exports = router;