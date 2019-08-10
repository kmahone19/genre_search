const mongoose = require('mongoose');

const { Schema } = mongoose;

const MovieSchema = new Schema({
  movieId: {
    type: String
  },
  title: {
    type: String
  }
});

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;