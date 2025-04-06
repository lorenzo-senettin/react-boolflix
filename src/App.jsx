import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const handleSearchResults = (results) => {
    setMovies(results);
  };

  return (
    <div className="app-container">
      <header>
        <h1>BoolFlix</h1>
        <SearchBar onResults={handleSearchResults} />
      </header>
      <main>
        {movies.length > 0 ? (
          <div className="movies-grid">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <h2>{movie.title}</h2>
                <p>
                  <strong>Original title:</strong> {movie.original_title}
                </p>
                <p>
                  <strong>Language:</strong> {movie.original_language}
                </p>
                <p>
                  <strong>Vote:</strong> {movie.vote_average}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No movies found.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
