import { useState } from "react";
import "./css/App.css";
import MovieCard from "./components/MovieCard.jsx";
import Home from "./pages/Home.jsx";
import {Routes, Route} from "react-router-dom"
import Favorites from "./pages/Favorites.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const movie_number = 2;
  return (
    <>
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/favorites"  element={<Favorites />}/>
        </Routes>
        
      </main>
    </>
  );
}

export default App;
