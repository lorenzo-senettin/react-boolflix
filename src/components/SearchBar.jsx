import React, { useState } from "react";

const searchMovies = (searchText) => {
  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3/search/movie";
  const url = `${baseUrl}?api_key=${api_key}&query=${encodeURIComponent(
    searchText
  )}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results ?? []);
};

const SearchBar = ({ onResults }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    searchMovies(searchText)
      .then((results) => onResults(results))
      .catch((error) => {
        console.error("error", error);
        onResults([]);
      });
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search movie..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
