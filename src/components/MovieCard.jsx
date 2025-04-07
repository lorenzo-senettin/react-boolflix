import React from "react";
import ReactCountryFlag from "react-country-flag";

const getCountryCode = (language) => {
  const lowerLang = language.toLowerCase();
  const mapping = {
    en: "US",
    fr: "FR",
    ko: "KR",
    ja: "JP",
    hi: "IN",
  };
  return mapping[lowerLang] || language.toUpperCase();
};

const MovieCard = ({ movie }) => {
  const countryCode = getCountryCode(movie.original_language);
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "https://via.placeholder.com/342x513?text=No+Image";

  const voteAverage = movie.vote_average || 0;
  const rating = Math.ceil(movie.vote_average / 2);
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <img
        key={i}
        src="/star.svg"
        alt="star"
        style={{
          width: "20px",
          height: "20px",
          marginRight: "2px",
          filter: i < rating ? "none" : "grayscale(100%)",
        }}
      />
    );
  }

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <strong>Original title:</strong> {movie.original_title}
      </p>
      <p>
        <strong>Language:</strong>{" "}
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{ width: "1.5em", height: "1.5em" }}
          title={countryCode}
        />
      </p>
      <p>
        <strong>Vote:</strong> {movie.vote_average}
      </p>
      <div className="star-rating">{stars}</div>
    </div>
  );
};

export default MovieCard;
