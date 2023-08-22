import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Movie 1",
      description: "Description 1",
      posterURL: "https://example.com/poster1.jpg",
      rating: 4.5,
    },
    {
      title: "Movie 2",
      description: "Description 3",
      posterURL: "https://example.com/poster1.jpg",
      rating: 0.5,
    },
    // Add your initial movie data here
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= parseFloat(rating)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
