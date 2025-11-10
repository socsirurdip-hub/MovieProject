import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {

  const[searchQuery, setSsearchQuery] = useState("");

  // Sample movie data
  const movies = [
    {
      title: "Inception",
      release_date: 2010,
      url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      title: "Interstellar",
      release_date: 2014,
      url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      title: "The Dark Knight",
      release_date: 2008,
      url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      title: "Pulp Fiction",
      release_date: 1994,
      url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      title: "The Matrix",
      release_date: 1999,
      url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
  ];

  const handleSearch = (e) => {

    e.preventDefault()

    // Implement search functionality here
    setSsearchQuery("------")

    
  }

  return (
    <div className="home">
      <h1>Welcome to the Movie Project Home Page</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input 
        type="text" 
        placeholder="Search for a movie..." 
        className="search-input" 
        value={searchQuery}
        onChange={(e)=> setSsearchQuery(e.target.value)} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <h2>Featured Movies</h2>


      <div className="movie-grid">
        {movies.map((movie,index) => {
        
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
}
export default Home;
