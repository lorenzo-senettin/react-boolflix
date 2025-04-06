import React, { useState } from "react";

const searchContent = (searchText) => {
  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
  const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURIComponent(
    searchText
  )}`;
  const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${encodeURIComponent(
    searchText
  )}`;

  return Promise.all([
    fetch(movieUrl).then((response) => response.json()),
    fetch(tvUrl).then((response) => response.json()),
  ]).then(([moviesData, tvData]) => {
    const movies = (moviesData.results ?? []).map((item) => ({
      ...item,
      media_type: "movie",
    }));

    const tvSeries = (tvData.results ?? []).map((item) => ({
      id: item.id,
      title: item.name,
      original_title: item.original_name,
      original_language: item.original_language,
      vote_average: item.vote_average,
      media_type: "tv",
    }));

    return [...movies, ...tvSeries];
  });
};

const SearchBar = ({ onResults }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    searchContent(searchText)
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
        placeholder="Search movie or TV series..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
