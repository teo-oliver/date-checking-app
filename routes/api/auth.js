const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.send('you reached the callback URI');
});

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
