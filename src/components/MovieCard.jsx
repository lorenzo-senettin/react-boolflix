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

  return (
    <div className="movie-card">
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
    </div>
  );
};

export default MovieCard;
