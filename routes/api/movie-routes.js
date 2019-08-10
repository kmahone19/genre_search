const router = require('express').Router();

const { getSavedMovies, saveMovie, removeMovie } = require('../../controllers/book-controller');

// GET and POST at /api/books
router
  .route('/')
  .get(getSavedMovies)
  .post(saveMovie);  

// DELETE at /api/books/:id
router
  .route('/:id')
  .delete(removeMovie);

module.exports = router;