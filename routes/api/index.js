const router = require('express').Router();
const movieRoutes = require('./movie-routes');

router.use('/movie', movieRoutes);

module.exports = router;
