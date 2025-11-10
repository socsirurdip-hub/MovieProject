function Home(){
    const movies = [
        { title: "Inception", release_date: 2010, url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
        { title: "Interstellar", release_date: 2014, url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
        { title: "The Dark Knight", release_date: 2008, url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
        { title: "Pulp Fiction", release_date: 1994, url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
        { title: "The Matrix", release_date: 1999, url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" }

    ];

    
    return(
        <div>
            <h1>Welcome to the Movie Project Home Page</h1>
            <div className="movie-grid">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <div className="movie-poster">
                            <img src={movie.url} alt={movie.title} />
                            <div className="movie-overlay">
                                <button className="favorite-btn" onClick={() => alert(`Favorited ${movie.title}`)}> 

        </div>
    )
}
