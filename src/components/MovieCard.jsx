import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>
        <strong>Titolo originale:</strong> {movie.original_title}
      </p>
      <p>
        <strong>Lingua:</strong> {movie.original_language}
      </p>
      <p>
        <strong>Voto:</strong> {movie.vote_average}
      </p>
    </div>
  );
};

export default MovieCard;
