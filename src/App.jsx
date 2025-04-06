import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchResults = (results) => {
    setMovies(results);
    setHasSearched(true);
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
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          hasSearched && (
            <div className="no-results">
              <p>No movies found.</p>
            </div>
          )
        )}
      </main>
    </div>
  );
}

export default App;
