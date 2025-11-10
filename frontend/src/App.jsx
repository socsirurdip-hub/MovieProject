import { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard.jsx";

function App() {
 
  const movie_number=2;
  return (
    <>
    {movie_number===1 ?
      (
        <MovieCard movie={{title: "Inception", release_date: "2010", url: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"}} />

      ):
      (
        <MovieCard movie={{title: "Interstellar", release_date: "2014", url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"}} /> 
      )
    }   
    </>
  );
}

export default App;
