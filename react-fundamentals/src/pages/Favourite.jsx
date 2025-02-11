import "../css/favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="movies-grid">
        {favorites ? (
          favorites.map((movie) => (
            <MovieCard
              movie={{
                id: movie.id,
                title: movie.title,
                release_date: movie.release_date,
                url: movie.url,
              }}
              key={movie.id}
            />
          ))
        ) : (
          <div className="favorites-empty">
            <h2>Favorites Page</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorite;
